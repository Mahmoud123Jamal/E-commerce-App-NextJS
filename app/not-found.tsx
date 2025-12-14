"use client";

import { useEffect, useState } from "react";
import styles from "./not-found.module.css";

export default function NotFound() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>404</h1>
        <h2>Uh, Ohh</h2>
        <h3>
          Sorry we cant find what you are looking for cuz its so dark in here
        </h3>
      </div>

      <div className={styles.torch} style={{ left: pos.x, top: pos.y }} />
    </div>
  );
}
