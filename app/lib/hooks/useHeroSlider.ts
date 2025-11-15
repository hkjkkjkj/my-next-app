// lib/hooks/useHeroSlider.ts
import { useState, useEffect, useRef } from 'react';

const AUTO_PLAY_DURATION = 5000; // 5 giây

// 'dataLength' là số lượng slide (ví dụ: heroData.length)
export function useHeroSlider(dataLength: number) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Hàm này xử lý timer
  const resetTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Bắt đầu 1 timer mới
    timerRef.current = setTimeout(() => {
      // Khi timer chạy, nó sẽ tự động bấm "next"
      setCurrentSlide((prev) => (prev === dataLength - 1 ? 0 : prev + 1));
    }, AUTO_PLAY_DURATION);
  };

  // --- Các hàm điều khiển sẽ được trả về cho component ---

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === dataLength - 1 ? 0 : prev + 1));
    resetTimer(); // Reset timer mỗi khi bấm
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? dataLength - 1 : prev - 1));
    resetTimer(); // Reset timer mỗi khi bấm
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentSlide(index);
    resetTimer(); // Reset timer mỗi khi bấm
  };

  // useEffect này sẽ tự động chạy khi component mount
  // và mỗi khi 'currentSlide' thay đổi
  useEffect(() => {
    resetTimer();

    // Dọn dẹp timer khi component bị hủy
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [currentSlide, dataLength]);

  // Trả về các "công cụ" mà component cần
  return {
    currentSlide,
    handleNext,
    handlePrev,
    handleThumbnailClick,
  };
}