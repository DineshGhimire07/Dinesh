import React, { useEffect, useRef, useState } from 'react'
import styles from '../styles/Hero.module.css'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import heroImage from '../assets/dinesh.png' // Use your actual image path

gsap.registerPlugin(ScrollTrigger)

const roles = ['AI & Automation Enthusiast', 'Data Analyst', 'Web Developer']

export default function Hero() {
  const heroRef = useRef(null)
  const [displayText, setDisplayText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[roleIndex % roles.length]
    const speed = isDeleting ? 50 : 100

    const updateText = () => {
      setDisplayText(prev => {
        if (!isDeleting) {
          const next = currentRole.substring(0, prev.length + 1)
          if (next === currentRole) setTimeout(() => setIsDeleting(true), 1000)
          return next
        } else {
          const next = currentRole.substring(0, prev.length - 1)
          if (next === '') {
            setIsDeleting(false)
            setRoleIndex(prev => prev + 1)
          }
          return next
        }
      })
    }

    const timer = setTimeout(updateText, speed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, roleIndex])

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(`.${styles.imageBubble}`, {
        x: 'random(-10, 10)',
        y: 'random(-10, 10)',
        rotate: 'random(-2, 2)',
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      })

      gsap.to(`.${styles.glowLetter}`, {
        color: 'var(--accent)',
        textShadow: '0 0 12px rgba(110,231,255,0.8)',
        duration: 0.6,
        stagger: {
          each: 0.3,
          repeat: -1,
          yoyo: true,
        },
      })

      gsap.to(`.${styles.image}`, {
        y: -30,
        scale: 1.05,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          scrub: true,
        },
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className={styles.hero}>
      <div className={styles.content}>
        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {'Dinesh Ghimire'.split('').map((ch, i) => (
            <span key={i} className={styles.glowLetter}>{ch}</span>
          ))}
        </motion.h1>

        <motion.h2
          className={styles.subtitle}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <span className={styles.typewriter}>{displayText}</span>
          <span className={styles.cursor}>|</span>
        </motion.h2>

        <motion.p
          className={styles.desc}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I craft intelligent, automated, data-driven experiences using Python, Power BI, and web technologies.
        </motion.p>

        <motion.div
          className={styles.ctaRow}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <motion.a
            href="#projects"
            className={`${styles.cta} ${styles.primary}`}
            whileHover={{ scale: 1.05 }}
          >
            View Projects
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/dineshghimire"
            target="_blank"
            rel="noreferrer"
            className={`${styles.cta} ${styles.linkedin}`}
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(110,231,255,0.4)' }}
          >
            LinkedIn
          </motion.a>
        </motion.div>
      </div>

      <div className={styles.imageWrapper}>
        <motion.div
          className={styles.imageBubble}
          whileHover={{
            scale: 1.08,
            rotate: 2,
            x: 12,
            y: -12,
            transition: { type: 'spring', stiffness: 100, damping: 10 }
          }}
        >
          <img src={heroImage} alt="Dinesh" className={styles.image} />
        </motion.div>
      </div>
    </section>
  )
}
