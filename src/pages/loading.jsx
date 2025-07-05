import React, {useEffect} from 'react';
import $ from "jquery";
import styles from '@/styles/loading.module.css';

const LoadingAnimation = () => {
    useEffect(() => {
      setTimeout(() => {
        $(".loadingContainer").fadeOut(500); // 500ms かけてフェードアウト
      }, 2000); // 2秒後にフェードアウト開始
    }, []);
  
    return (
      <div className={`${styles.loadingContainer} loadingContainer`}>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
        <div className={styles.dot}></div>
      </div>
    );
};

export default LoadingAnimation;