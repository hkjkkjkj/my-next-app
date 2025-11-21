// app/components/NewsSection/NewsSection.tsx
"use client";

import { useEffect, useRef, useState } from 'react';
import styles from './NewSection.module.css'; // Import file CSS vừa tạo
import { newsList } from '../../../lib/data';

const NewsSection = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.grid}>

                    {newsList.map((item) => (
                        <div key={item.id} className={styles.card}>

                            {/* Hình ảnh */}
                            <div className={styles.imageWrapper}>
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className={styles.image}
                                />
                            </div>

                            {/* Tiêu đề & Mô tả */}
                            <h3 className={styles.title}>{item.title}</h3>
                            <p className={styles.description}>
                                {item.description}
                            </p>

                            {/* Nút bấm */}
                            <div className={styles.buttonWrapper}>
                                <button className={styles.button}>
                                    {item.buttonText}
                                    {item.hasIcon && (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    )}
                                </button>
                            </div>

                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default NewsSection;