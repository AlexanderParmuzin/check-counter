import React from 'react'
import styles from './PersonCard.module.css'

export default function PersonCard({
  setPersonName,
  addName,
  showDishCardComponent,
  personState,
}) {
  return (
    <div className={styles.person__card}>
      <form>
        <label>
          <p>Введите Имя</p>
          <input
            type="text"
            name="name"
            onChange={(event) => setPersonName(event.target.value)}
          />
          <button className={styles.btn__add} onClick={addName}>
            Добавить
          </button>
        </label>
      </form>

      {personState.map((el, index) => {
        return (
          <h2 className={styles.person__name} key={index}>
            {el.name}
          </h2>
        )
      })}

      {personState.length < 2 ? null : (
        <div className={styles.btn__end}>
          <button onClick={showDishCardComponent}>Закончить</button>
        </div>
      )}
    </div>
  )
}
