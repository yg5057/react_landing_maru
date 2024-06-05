import { useEffect, useRef, useState } from 'react';

const useScrollAnimation = (keyframes, threshold = 0.1) => {
  const ref = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animationStarted) {
            ref.current.style.animation = `${keyframes.getName()} 1s ease forwards`;
          setAnimationStarted(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [keyframes, threshold, animationStarted]);

  return ref;
};

export default useScrollAnimation;
