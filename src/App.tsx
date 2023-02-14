import { PlayCircle, House, GraduationCap, Check, CurrencyCircleDollar, NotePencil } from 'phosphor-react'
import './global.css'

import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.container}>
      <span className={styles.statusItem}>
        <PlayCircle size={32} />
      </span>
      <hr className={styles.trackLine} />
      <span className={styles.statusItem}>
        <House size={32} />
      </span>
      <hr className={styles.trackLine} />
      <span className={styles.statusItem}>
        <GraduationCap size={32} />
      </span>
      <hr className={styles.trackLine} />
      <span className={styles.statusItem}>
        <Check size={32} />
      </span>
      <hr className={styles.trackLine} />
      <span className={styles.statusItem}>
        <CurrencyCircleDollar size={32} />
      </span>
      <hr className={styles.trackLine} />
      <span className={styles.statusItem}>
        <NotePencil size={32} />
      </span>
    </div>
  )
}
