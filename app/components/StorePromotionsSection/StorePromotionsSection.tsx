"use client";

import styles from './StorePromotionsSection.module.css';
import { StorePromotionItem } from '@/lib/data';

interface StorePromotionsSectionProps {
    promotions: StorePromotionItem[];
}

export default function StorePromotionsSection({ promotions }: StorePromotionsSectionProps) {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {promotions.map((item) => (
                    <div key={item.id} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className={styles.image}
                                onError={(e) => {
                                    // Fallback placeholder images based on ID to make them look distinct
                                    let fallbackText = item.title;
                                    let bgColor = "333";
                                    if (item.id === 'sales-specials') bgColor = "4a148c"; // Purple
                                    if (item.id === 'free-games') bgColor = "0d47a1"; // Blue
                                    if (item.id === 'apps') bgColor = "b71c1c"; // Red

                                    (e.target as HTMLImageElement).src = `https://via.placeholder.com/600x338/${bgColor}/fff?text=${encodeURIComponent(fallbackText)}`;
                                }}
                            />
                        </div>
                        <div className={styles.content}>
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>{item.description}</p>
                            <a href="#" className={styles.button}>
                                {item.buttonText}
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.footer}>
                <p className={styles.footerText}>
                    * The lowest price offered on The Epic Games Store in the last 30 days before discount
                </p>
            </div>
        </section>
    );
}
