import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from 'gsap';
import styles from '@/styles/cubeAnimation.module.css';

const CubeAnimation = () => {
    const cubeRef = useRef(null); // キューブの参照を作成

    useEffect(() => {
      // gsapでキューブを回転させるアニメーションを設定
      const cube = cubeRef.current;
      if (cube) {
        gsap.to(cube, {
          rotationX: 45, // X軸回転
          rotationY: 45, // Y軸回転
          duration: 2,   // アニメーションの期間
          repeat: -1,    // 無限に繰り返し
          yoyo: true,    // 前後に回転
          ease: 'none',  // イージングなし
        });
      }
    }, []);
  
    return (
      <div className={styles.container}>
        <div ref={cubeRef} className={styles.cube}>
          <div className={`${styles.face} ${styles.front}`}></div>
          <div className={`${styles.face} ${styles.back}`}></div>
          <div className={`${styles.face} ${styles.left}`}></div>
          <div className={`${styles.face} ${styles.right}`}></div>
          <div className={`${styles.face} ${styles.top}`}></div>
          <div className={`${styles.face} ${styles.bottom}`}></div>
        </div>
      </div>
    );
  };
  
export default CubeAnimation;