'use client'
import { useGSAP } from '@gsap/react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import styles from './styles/TextShowAnimation.module.css';

type AnimatedBoxProps = {
  className: string;
  text: string;
};

type AppProps = {
  isMouseInside: boolean;
  className: string;
};

function TextShowAnimation({ isMouseInside, className }: AppProps) {
  const divRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    const animateBox = (boxClass: string) => {
      timeline.to(`.${boxClass}`, { opacity: 1, duration: 0 })
        .to(`.${boxClass} .${styles.letter}`, {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.3,
        })
        .to(`.${boxClass}`, { opacity: 0, duration: 0.5 });
    };

    animateBox('box1');
    animateBox('box2');
    animateBox('box3');

    timelineRef.current = timeline;
  }, { scope: divRef });

  useEffect(() => {
    if (isMouseInside) {
      timelineRef.current?.play();
    } else {
      timelineRef.current?.pause();
    }
  }, [isMouseInside]);

  return (
    <div ref={divRef} className={styles.container}>
      <div className={styles.relativeContainer}>
        <AnimatedBox className={`box1 ${className}`} text="HELLO" />
        <AnimatedBox className={`box2 ${className}`} text="HOW" />
        <AnimatedBox className={`box3 ${className}`} text="YOU?" />
      </div>
    </div>
  );
}

const AnimatedBox: React.FC<AnimatedBoxProps> = ({ className, text }) => {
  return (
    <div className={`${styles.animatedBox} ${className}`}>
      {text.split('').map((letter, index) => (
        <span key={index + letter} className={`word-animate poppins-extralight-italic ${styles.letter}`}>{letter}</span>
      ))}
    </div>
  );
};

export default TextShowAnimation;
