'use client';

import { useState } from 'react';
import styles from './PaymentModal.module.css';
import { FaTimes, FaCreditCard, FaQrcode, FaPaypal, FaGoogle } from 'react-icons/fa';
import { SiVisa, SiMastercard } from 'react-icons/si';

interface PaymentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    gameTitle: string;
    price: string;
}

export default function PaymentModal({ isOpen, onClose, onConfirm, gameTitle, price }: PaymentModalProps) {
    const [selectedMethod, setSelectedMethod] = useState<'card' | 'qr' | 'paypal' | 'gpay'>('qr');
    const [processing, setProcessing] = useState(false);

    if (!isOpen) return null;

    const handleConfirmPayment = async () => {
        setProcessing(true);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 1500));

        onConfirm();
        setProcessing(false);
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <FaTimes />
                </button>

                <div className={styles.header}>
                    <h2>Complete Your Purchase</h2>
                    <p className={styles.gameInfo}>{gameTitle}</p>
                </div>

                <div className={styles.priceSection}>
                    <span>Total Amount:</span>
                    <span className={styles.price}>{price}</span>
                </div>

                <div className={styles.paymentMethods}>
                    <h3>Select Payment Method</h3>

                    <div className={styles.methodGrid}>
                        {/* QR Code Payment */}
                        <button
                            className={`${styles.methodBtn} ${selectedMethod === 'qr' ? styles.active : ''}`}
                            onClick={() => setSelectedMethod('qr')}
                        >
                            <FaQrcode size={24} />
                            <span>QR Code</span>
                        </button>

                        {/* Credit/Debit Card */}
                        <button
                            className={`${styles.methodBtn} ${selectedMethod === 'card' ? styles.active : ''}`}
                            onClick={() => setSelectedMethod('card')}
                        >
                            <FaCreditCard size={24} />
                            <span>Card</span>
                        </button>

                        {/* PayPal */}
                        <button
                            className={`${styles.methodBtn} ${selectedMethod === 'paypal' ? styles.active : ''}`}
                            onClick={() => setSelectedMethod('paypal')}
                        >
                            <FaPaypal size={24} />
                            <span>PayPal</span>
                        </button>

                        {/* Google Pay */}
                        <button
                            className={`${styles.methodBtn} ${selectedMethod === 'gpay' ? styles.active : ''}`}
                            onClick={() => setSelectedMethod('gpay')}
                        >
                            <FaGoogle size={24} />
                            <span>Google Pay</span>
                        </button>
                    </div>
                </div>

                {/* Payment Details Section */}
                <div className={styles.paymentDetails}>
                    {selectedMethod === 'qr' && (
                        <div className={styles.qrSection}>
                            <p className={styles.instruction}>Scan this QR code with your banking app</p>
                            <div className={styles.qrCodeWrapper}>
                                <img
                                    src="/qr-code-placeholder.png"
                                    alt="QR Code"
                                    className={styles.qrCode}
                                    onError={(e) => {
                                        // Fallback to generated QR
                                        (e.target as HTMLImageElement).style.display = 'none';
                                        const parent = (e.target as HTMLElement).parentElement;
                                        if (parent) {
                                            parent.innerHTML = '<div style="width: 200px; height: 200px; background: white; display: flex; align-items: center; justify-content: center; border-radius: 8px;"><span style="color: #333; font-size: 14px;">QR Code</span></div>';
                                        }
                                    }}
                                />
                            </div>
                            <p className={styles.qrInfo}>Bank: Vietcombank | Account: 1234567890</p>
                        </div>
                    )}

                    {selectedMethod === 'card' && (
                        <div className={styles.cardSection}>
                            <div className={styles.cardLogos}>
                                <SiVisa size={40} />
                                <SiMastercard size={40} />
                            </div>
                            <p className={styles.instruction}>Enter your card details</p>
                            <input type="text" placeholder="Card Number" className={styles.input} />
                            <div className={styles.cardRow}>
                                <input type="text" placeholder="MM/YY" className={styles.input} />
                                <input type="text" placeholder="CVV" className={styles.input} />
                            </div>
                        </div>
                    )}

                    {selectedMethod === 'paypal' && (
                        <div className={styles.otherMethod}>
                            <FaPaypal size={60} color="#0070ba" />
                            <p>You will be redirected to PayPal to complete your purchase</p>
                        </div>
                    )}

                    {selectedMethod === 'gpay' && (
                        <div className={styles.otherMethod}>
                            <FaGoogle size={60} color="#4285f4" />
                            <p>You will be redirected to Google Pay to complete your purchase</p>
                        </div>
                    )}
                </div>

                <div className={styles.actions}>
                    <button
                        className={styles.cancelBtn}
                        onClick={onClose}
                        disabled={processing}
                    >
                        Cancel
                    </button>
                    <button
                        className={styles.confirmBtn}
                        onClick={handleConfirmPayment}
                        disabled={processing}
                    >
                        {processing ? 'Processing...' : 'Complete Purchase'}
                    </button>
                </div>
            </div>
        </div>
    );
}
