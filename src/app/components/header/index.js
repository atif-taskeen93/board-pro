'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import styles from "../../page.module.css";

export default function AppHeader() {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 80) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isFixed ? `${styles.headerFixed}` : ''}`}>
      <div className="container">
        <Image src="/logo.webp" alt="Logo" width={200} height={44} />
      </div>
    </header>
  );
}
