import React from 'react'
import styles from '../styles/Home.module.css'
import Whatsapp from './components/Whatsapp'
import CommunitiePopup from './components/popups/CommunitiePopup'
import MenuPopup from './components/popups/MenuPopup'
import SearchMassagePopup from './components/popups/SearchMassagePopup'
import MenuTwoPopup from './components/popups/MenuTwoPopup'
import NewChatPopup from './components/popups/NewChatPopup'
import FilterPopup from './components/popups/FilterPopup'
import SpleshScreenPopup from './components/popups/SpleshScreenPopup'
import ContactDetail from './components/popups/ContactDetail'

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Whatsapp /> */}
      {/* <CommunitiePopup/> */}
      {/* <MenuPopup/> */}
      {/* <MenuTwoPopup/> */}
      {/* <SearchMassagePopup/> */}
      {/* <NewChatPopup/> */}
      {/* <FilterPopup/> */}
      {/* <SpleshScreenPopup/> */}
      <ContactDetail/>

    </div>
  )
}
