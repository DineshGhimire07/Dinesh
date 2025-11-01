import React from 'react'
import styles from '../styles/Projects.module.css'
import { motion } from 'framer-motion'

const experienceData = [
  {
    title: 'Junior Data Analyst',
    org: 'RK Business Group',
    location: 'New Delhi',
    duration: 'Aug 2025 – Present (3 months)',
  },
  {
    title: 'Head of Marketing & PR',
    org: 'Avinya – SSBS',
    location: 'Sharda University',
    duration: 'Feb 2025 – Aug 2025 (7 months)',
  },
  {
    title: 'Secretary – Harmonia HR Club',
    org: 'SSBS',
    location: 'Sharda University',
    duration: 'Jan 2025 – Aug 2025 (8 months)',
  },
  {
    title: 'Student Coordinator – T&P Dept.',
    org: 'Sharda University',
    location: '',
    duration: 'Feb 2025 – Jul 2025 (6 months)',
  },
  {
    title: 'Business Data Analyst',
    org: 'RK Business Group',
    location: 'New Delhi',
    duration: 'May 2025 – Jun 2025 (2 months)',
  },
  {
    title: 'Operational Assistant',
    org: 'RK Business Group',
    location: 'New Delhi',
    duration: 'Dec 2024 – Jan 2025 (2 months)',
  },
]

const projectData = [
  { title: 'Portfolio Website', tech: 'React + GSAP', status: 'Live' },
  { title: 'Data Dashboard', tech: 'Power BI + Excel', status: 'Prototype' },
  { title: 'AR Game Demo', tech: 'Three.js + WebXR', status: 'In Progress' },
  { title: 'Marketing Campaign Tracker', tech: 'Python + Pandas', status: 'Completed' },
  { title: 'Resume Builder Tool', tech: 'Next.js + Tailwind', status: 'Beta' },
  { title: 'Placement Portal UI', tech: 'Figma + Framer', status: 'Design Only' },
]

export default function Project() {
  return (
    <section className={styles.projectSection}>
      <motion.h2
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span className={styles.glowText}>Projects & Experience</span>
      </motion.h2>

      <div className={styles.pairContainer}>
        {experienceData.map((exp, index) => (
          <div key={index} className={styles.pairRow}>
            {/* Experience Card */}
            <motion.div
              className={styles.experienceCard}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={styles.expTopRow}>
                <strong>{exp.org}</strong>
                <span className={styles.expDuration}>{exp.duration}</span>
              </div>
              <h3>{exp.title}</h3>
              <p>{exp.location}</p>
            </motion.div>

            {/* Project Card */}
            <motion.div
              className={styles.projectCard}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3>{projectData[index]?.title || 'Project'}</h3>
              <p>{projectData[index]?.tech}</p>
              <small>{projectData[index]?.status}</small>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
