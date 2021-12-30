import React from 'react'
import styles from './CheckName.module.css'

export default function CheckCard({ dishName }) {
  return (
    <>
      <h1 className={styles.check__title}>{dishName}</h1>
    </>
  )
}
