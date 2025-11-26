"use client";

import React from 'react';
import styles from './Footer.module.css';
import { FaFacebookSquare, FaYoutube, FaArrowUp } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
    // Dữ liệu nội dung (Data)
    const footerLinks = [
        {
            title: "Games",
            items: ["Fortnite", "Fall Guys", "Rocket League", "Unreal Tournament", "Infinity Blade", "Shadow Complex", "Robo Recall"]
        },
        {
            title: "Marketplaces",
            items: ["Epic Games Store", "Fab", "Sketchfab", "ArtStation", "Store Refund Policy", "Store EULA"]
        },
        {
            title: "Tools",
            items: ["Unreal Engine", "UEFN", "MetaHuman", "Twinmotion", "Megascans", "RealityScan", "RAD Game Tools"]
        },
        {
            title: "Online Services",
            items: ["Epic Online Services", "Kids Web Services", "Services Agreement", "Acceptable Use Policy", "Trust Statement", "Subprocessor List"]
        },
        {
            title: "Company",
            items: ["About", "Newsroom", "Careers", "Students", "UX Research"]
        },
        {
            title: "Resources",
            items: ["Dev Community", "MegaGrants", "Support-A-Creator", "Creator Agreement", "Distribute on Epic Games", "Unreal Engine Branding Guidelines", "Fan Art Policy", "Community Rules", "EU Digital Services Act Inquiries", "Epic Pro Support"]
        }
    ];

    const legalLinks = ["Terms of service", "Privacy policy", "Safety & security", "Store refund policy", "Publisher Index"];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                {/* TẦNG 1: Header */}
                <div className={styles.topBar}>
                    <div className={styles.storeLabel}>STORE</div>
                    <div className={styles.socialIcons}>
                        <a href="#" aria-label="Facebook" className={styles.iconLink}><FaFacebookSquare /></a>
                        <a href="#" aria-label="X (Twitter)" className={styles.iconLink}><FaXTwitter /></a>
                        <a href="#" aria-label="YouTube" className={styles.iconLink}><FaYoutube /></a>
                    </div>
                </div>

                <hr className={styles.separator} />

                {/* TẦNG 2: Navigation Grid */}
                <div className={styles.linksGrid}>
                    {footerLinks.map((column, index) => (
                        <div key={index} className={styles.column}>
                            <div className={styles.columnTitle}>{column.title}</div>
                            <ul className={styles.linkList}>
                                {column.items.map((item, idx) => (
                                    <li key={idx}>
                                        <a href="#" className={styles.link}>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <hr className={styles.separator} />

                {/* TẦNG 3: Legal & Utility */}
                <div className={styles.bottomBar}>
                    {/* Khối bên trái: Text bản quyền + Links pháp lý */}
                    <div className={styles.leftContent}>
                        <div className={styles.copyrightText}>
                            © 2025, Epic Games, Inc. All rights reserved. Epic, Epic Games, the Epic Games logo, Fortnite, the Fortnite logo, Unreal, Unreal Engine, the Unreal Engine logo, Unreal Tournament, and the Unreal Tournament logo are trademarks or registered trademarks of Epic Games, Inc. in the United States of America and elsewhere. Other brands or product names are the trademarks of their respective owners. Our websites may contain links to other sites and resources provided by third parties. These links are provided for your convenience only. Epic Games has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them.
                        </div>
                        <div className={styles.legalLinksRow}>
                            {legalLinks.map((link, index) => (
                                <a key={index} href="#" className={styles.legalLink}>{link}</a>
                            ))}
                        </div>
                    </div>

                    {/* Khối bên phải: Nút Back to top */}
                    <div className={styles.rightContent}>
                        <button onClick={scrollToTop} className={styles.backToTopBtn}>
                            Back to top
                            <span className={styles.arrowIcon}>
                                <FaArrowUp />
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
}