
import React from 'react';

export default function TestImagePage() {
    const images = [
        '/game-covers/black-ops-7.png',
        '/game-covers/cyberpunk-2077.png',
        '/top-new-releases/celeste.png',
        '/epic-form-epic-first-run/doom-the-dark-ages.png'
    ];

    return (
        <div style={{ padding: 20 }}>
            <h1>Image Path Test</h1>
            {images.map(src => (
                <div key={src} style={{ margin: '20px 0' }}>
                    <p>Path: {src}</p>
                    <img src={src} alt="test" width={200} />
                </div>
            ))}
        </div>
    );
}
