
/**
 * Compresses an image file by resizing and reducing quality using HTML5 Canvas.
 * 
 * @param file The original File object
 * @param maxWidth Maximum width of the output image (default 1920)
 * @param quality Quality from 0 to 1 (default 0.8)
 * @returns Promise resolving to the compressed File
 */
export async function compressImage(file: File, maxWidth = 1920, quality = 0.8): Promise<File> {
    // If it's not an image, return original
    if (!file.type.startsWith('image/')) return file;
    // If it's effectively small (< 500KB), return original to save processing
    if (file.size < 500 * 1024) return file;

    return new Promise((resolve, reject) => {
        const img = new Image();
        const reader = new FileReader();

        reader.onload = (e) => {
            img.src = e.target?.result as string;
        };

        img.onload = () => {
            const canvas = document.createElement('canvas');
            let width = img.width;
            let height = img.height;

            // Calculate new dimensions
            if (width > maxWidth) {
                height = Math.round((height * maxWidth) / width);
                width = maxWidth;
            }

            canvas.width = width;
            canvas.height = height;

            const ctx = canvas.getContext('2d');
            if (!ctx) {
                resolve(file); // Fallback
                return;
            }

            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob(
                (blob) => {
                    if (!blob) {
                        resolve(file);
                        return;
                    }

                    // Create new File from blob
                    const compressedFile = new File([blob], file.name, {
                        type: 'image/jpeg', // Convert to JPEG for better compression
                        lastModified: Date.now(),
                    });

                    // If compressed is somehow larger (rare for photos, possible for optimized pngs), return original
                    if (compressedFile.size > file.size) {
                        resolve(file);
                    } else {
                        console.log(`Compressed: ${(file.size / 1024 / 1024).toFixed(2)}MB -> ${(compressedFile.size / 1024 / 1024).toFixed(2)}MB`);
                        resolve(compressedFile);
                    }
                },
                'image/jpeg',
                quality
            );
        };

        img.onerror = (err) => reject(err);
        reader.onerror = (err) => reject(err);

        reader.readAsDataURL(file);
    });
}
