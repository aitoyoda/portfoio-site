import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import styles from '@/styles/typingEffect.module.css';
import CubeAnimation from '@/pages/cubeAnimation';

gsap.registerPlugin(TextPlugin);

const TypingEffect = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    const typingText = "はじめまして、エンジニアAIです！";

    const typingAnimation = gsap.to({}, {
      duration: 1,
      onUpdate: function () {
        const progress = this.progress() * typingText.length;
        setText(typingText.substr(0, Math.round(progress)));
      },
      onComplete: () => {
        console.log("タイピングアニメーションが完了しました。");
      },
    });

    return () => {
        typingAnimation.kill();
    }
  }, []);

  return (
    <div>
      <CubeAnimation />
      <div
        className={styles.typingAnimation}>
        {text}
      </div>
    </div>
  );
};

export default TypingEffect;
