//app/components/DealSection/DealSection.tsx
import React from 'react';
import styles from './DealsSection.module.css';
import { dealsData } from '../../../lib/data';

const DealsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {dealsData.map((item) => (
                        <div key={item.id} className={styles.card}>

                            {/* Wrapper Ảnh */}
                            <div className={styles.imageWrapper}>
                                <img src={item.image} alt={item.title} className={styles.image} />

                                {/* Chỉ hiện banner tím nếu có tag */}
                                {item.tag && (
                                    <div className={styles.dealBanner}>
                                        {item.tag}
                                    </div>
                                )}
                            </div>

                            {/* Tiêu đề */}
                            <h3 className={styles.title}>{item.title}</h3>

                            {/* Logic hiển thị: Nếu là Game thì hiện Giá, nếu là Promo thì hiện Nút */}
                            {item.type === 'game' ? (
                                <div className={styles.priceContainer}>
                                    <span className={styles.discountBadge}>{item.discount}</span>
                                    <span className={styles.originalPrice}>{item.originalPrice}</span>
                                    <span className={styles.newPrice}>{item.price}</span>
                                </div>
                            ) : (
                                <button className={styles.browseBtn}>
                                    {item.buttonText}
                                </button>
                            )}

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default DealsSection;
