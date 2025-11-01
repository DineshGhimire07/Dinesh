import React, { useEffect, useRef } from "react";
import styles from "../styles/Experience.module.css";
import { EXPERIENCE } from "../data/siteData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".exp-item", {
        x: -30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.6,
        scrollTrigger: { trigger: ref.current, start: "top 80%" }
      });

      // line grow
      gsap.from(".timeline-line", {
        scaleY: 0,
        transformOrigin: "top center",
        scrollTrigger: { trigger: ref.current, start: "top 85%" }
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} id="experience">
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.wrapper}>
        <div className={styles.timeline}>
          <div className="timeline-line" />
          {EXPERIENCE.map((e, i) => (
            <div className={`exp-item ${styles.item}`} key={i}>
              <div className={styles.dot} />
              <div className={styles.content}>
                <div className={styles.role}>{e.role}</div>
                <div className={styles.org}>{e.org} • <span className={styles.period}>{e.period}</span></div>
                <div className={styles.short}>{e.short}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
