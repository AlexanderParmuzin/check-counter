import React, { useEffect } from 'react'
import styles from './BillCard.module.css'

export default function BillCard({ personState }) {

  return (
    <div className={styles.bill__container}>
      {personState.map((person, index) => (
        <div className={styles.bill__card} key={person.id}>
          <h1>{person.name}</h1>
          <p>Должен</p>
          <h3>{person.debt} руб</h3>
        </div>
      ))}
    </div>
  )
}
