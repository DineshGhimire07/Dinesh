import React, { useEffect, useState } from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = ['Home', 'About', 'Projects', 'Contact']

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>Dinesh</div>
      <nav className={styles.nav}>
        {links.map(link => (
          <a key={link} href={`#${link.toLowerCase()}`} className={styles.link}>
            {link}
          </a>
        ))}
      </nav>
    </header>
  )
}
