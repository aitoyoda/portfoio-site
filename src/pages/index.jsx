import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import LoadingAnimation from '@/pages/loading'

// サーバーサイドレンダリングを無効化
const TypingEffect = dynamic(() => import('@/pages/typingEffect'), {
  ssr: false, 
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    // 3秒間ローディングを表示
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // ローディング時間は調整可能

    return () => clearTimeout(timer);
  }, []);

  const handleTypingComplete = () => {
    setTypingCompleted(true);
  };

  return (
    <div>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <>
        <TypingEffect onComplete={handleTypingComplete} />
        </>
        
      )}
      
    </div>
    
  );
}
