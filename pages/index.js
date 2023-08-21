import React from 'react'
import styles from '../styles/Home.module.css'
import Whatsapp from './components/Whatsapp'

export default function Home() {
  return (
    <div className={styles.container}>
    <Whatsapp/>
    </div>
  )
}
