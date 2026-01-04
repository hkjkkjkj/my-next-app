import React from 'react';
import styles from './PromosSection.module.css';
import { PromosItem } from '@/lib/data';

interface PromosSectionProps {
    promos: PromosItem[];
}

const PromosSection = ({ promos }: PromosSectionProps) => {

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {promos.map((item) => (
                        <div key={item.id} className={styles.card}>

                            {/* Hình ảnh */}
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className={styles.image}
                                />
                            </div>

                            {/* Nội dung */}
                            <div className={styles.content}>
                                <h3 className={styles.title}>{item.title}</h3>
                                <p className={styles.description}>{item.description}</p>
                                <button className={styles.button}>
                                    {item.buttonText}
                                </button>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default PromosSection;