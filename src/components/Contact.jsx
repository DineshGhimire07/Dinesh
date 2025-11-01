import React from 'react'
import styles from '../styles/Contact.module.css'
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub, FaInstagram, FaGoogle, FaFacebook, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/dineshghimire/' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/dineshghimire07' },
  { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/dineshghimirea/' },
  { name: 'Google Scholar', icon: <FaGoogle />, url: 'https://scholar.google.com/citations?hl=en&user=Ax8Zl2wAAAAJ' },
  { name: 'Facebook', icon: <FaFacebook />, url: 'https://www.facebook.com/Dineshghimire07' },
]

export default function Contact() {
  const currentTime = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kathmandu',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  return (
    <section className={styles.contactSection}>
      <div className={styles.contentWrapper}>
        {/* Left Message */}
        <motion.div
          className={styles.leftText}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1>Want to start a new project?</h1>
          <h2>Or just say hello.</h2>
        </motion.div>

        {/* Right Contact Card */}
        <motion.div
          className={styles.rightBox}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className={styles.email}>
            <FaEnvelope className={styles.emailIcon} />
            ghimiredinesh221@gmail.com
          </p>
          <div className={styles.socialList}>
            {socialLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialItem}
                whileHover={{ scale: 1.1 }}
              >
                {link.icon}
                <span>{link.name}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <p>© 2025 Dinesh Ghimire. All rights reserved.</p>
        
        <p>Time: {currentTime}</p>
      </div>
    </section>
  )
}
