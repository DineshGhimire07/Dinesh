import React, { useLayoutEffect, useRef } from 'react'
import styles from '../styles/Skills.module.css'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaReact, FaPython, FaDatabase, FaFigma, FaLightbulb } from 'react-icons/fa'

gsap.registerPlugin(ScrollTrigger)

const categories = [
  {
    title: 'Technical / Tools',
    icon: <FaReact />,
    skills: ['Python', 'React', 'Power BI', 'Git & GitHub', 'VS Code', 'Vite'],
  },
  {
    title: 'Data & Analytics',
    icon: <FaDatabase />,
    skills: ['Data Cleaning', 'Visualization', 'SQL', 'Excel', 'Power Query'],
  },
  {
    title: 'Design & Creativity',
    icon: <FaFigma />,
    skills: ['UI/UX Design', 'Wireframing', 'Figma', 'Framer Motion', 'GSAP'],
  },
  {
    title: 'Business & Entrepreneurship',
    icon: <FaLightbulb />,
    skills: ['Project Management', 'Lean Startup', 'Pitching Ideas', 'Market Research'],
  },
  {
    title: 'Soft Skills',
    icon: <FaLightbulb />,
    skills: ['Communication', 'Problem Solving', 'Teamwork', 'Adaptability', 'Growth Mindset'],
  },
  {
    title: 'Hobbies & Interests',
    icon: <FaLightbulb />,
    skills: ['Chess', 'Solving Cubes', 'Photography', 'Traveling', 'Blogging'],
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export default function Skills() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(`.${styles.card}`)
      cards.forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      // Magnetic hover effect for heading
      const heading = headingRef.current
      const strength = 30

      const moveMagnetic = (e) => {
        const rect = heading.getBoundingClientRect()
        const x = e.clientX - rect.left - rect.width / 2
        const y = e.clientY - rect.top - rect.height / 2
        gsap.to(heading, {
          x: x / strength,
          y: y / strength,
          duration: 0.3,
          ease: 'power3.out',
        })
      }

      const resetMagnetic = () => {
        gsap.to(heading, {
          x: 0,
          y: 0,
          duration: 0.4,
          ease: 'power3.out',
        })
      }

      heading.addEventListener('mousemove', moveMagnetic)
      heading.addEventListener('mouseleave', resetMagnetic)
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className={styles.skillsSection}>
      <motion.h2
        ref={headingRef}
        className={`${styles.heading} ${styles.magnetic}`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className={styles.glowText}>Skills</span>
      </motion.h2>

      <div className={styles.grid}>
        {categories.map((category, index) => (
          <motion.div
            key={index}
            className={styles.card}
            initial={{ opacity: 0, y: 60, scale: 0.95, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}>{category.icon}</span>
              <h3 className={styles.cardTitle}>{category.title}</h3>
            </div>

            <motion.ul
              className={styles.skillList}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((skill, i) => (
                <motion.li
                  key={i}
                  className={styles.skillItem}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, x: 6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className={styles.skillName}>{skill}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
