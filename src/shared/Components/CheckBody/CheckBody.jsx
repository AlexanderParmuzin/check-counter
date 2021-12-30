import React from 'react'
import styles from './CheckBody.module.css'

export default function CheckBody({ personName, setDebt, dishId, personId }) {
  return (
    <div className={styles.check__body}>
      <h2 className={styles.body__title}>{personName}</h2>
      <button className={styles.btn__debt} onClick={() => setDebt(dishId, personId)}>Указать</button>
    </div>
  )
}
