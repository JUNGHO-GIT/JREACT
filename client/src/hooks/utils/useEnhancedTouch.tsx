// useEnhancedTouch.tsx

import { useEffect } from "@importReacts";

// -------------------------------------------------------------------------------------------------
export const useEnhancedTouch = () => {
  useEffect(() => {
    const handleTouchStart = () => {
      window.requestAnimationFrame(() => {
      });
    }

    const handleTouchMove = () => {
      window.requestAnimationFrame(() => {
      });
    };

    // Passive true로 이벤트 리스너 등록
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);
};