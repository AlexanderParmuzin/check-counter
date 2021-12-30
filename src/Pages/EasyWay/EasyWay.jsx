import React, { useState } from 'react'
import styles from './EasyWay.module.css'

export default function EasyWay() {
  const [companyCount, setCompanyCount] = useState()
  const [chequeAmount, setChequeAmount] = useState()
  const dividedAmount = Math.ceil(chequeAmount / companyCount)

  function howMany() {
    const enteredCount = prompt('So, how many ?')
    setCompanyCount(enteredCount)
  }

  function howMuch() {
    const enteredCount = prompt('So, how much ?')
    setChequeAmount(enteredCount)
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>So here we are.</h1>

      <div className={styles.questions}>
        {chequeAmount ? (
          `${chequeAmount} rubles`
        ) : (
          <div onClick={howMuch}>1. So, how much was the cheque amount ? </div>
        )}

        <br />
        <br />

        {companyCount ? (
          `${companyCount} human-beings`
        ) : (
          <div onClick={howMany}>
            2. Let`s figure how many people were there.
          </div>
        )}

        <br />
        <br />

        {companyCount && chequeAmount
          ? `Everyone needs to pay ${dividedAmount} rubles`
          : ``}
      </div>
    </div>
  )
}
