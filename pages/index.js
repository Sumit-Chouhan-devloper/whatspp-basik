import React from 'react'
import styles from '../styles/Home.module.css'
import Whatsapp from './components/Whatsapp'
import CommunitiePopup from './components/popups/CommunitiePopup'

export default function Home() {
  return (
    <div className={styles.container}>
      <Whatsapp />
      {/* <CommunitiePopup/> */}
    </div>
  )
}
