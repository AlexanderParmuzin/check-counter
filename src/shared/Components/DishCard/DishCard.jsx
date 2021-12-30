import React from 'react'
import styles from './DishCard.module.css'

export default function DishCard({
  setDishName,
  setDishPrice,
  setDishSumPrice,
  onAddDish,
  onShowCheckCardComponent,
  dishState,
}) {
  return (
    <div>
      <div className={styles.dish__card}>
        <form>
          <label>
            <p>Название блюда/напитка</p>
            <input
              type="text"
              name="dishName"
              onChange={(event) => setDishName(event.target.value)}
            />
          </label>
          <label>
            <p>Цена за шт</p>
            <input
              type="number"
              name="dishPrice"
              onChange={(event) => setDishPrice(event.target.value)}
            />
          </label>
          <label>
            <p>Сумма</p>
            <input
              type="number"
              name="dishPrice"
              onChange={(event) => setDishSumPrice(event.target.value)}
            />
          </label>

          {/* <button>No more dishes</button> */}

          <div className={styles.btn__add}>
            <button onClick={onAddDish}>Добавить</button>
          </div>
        </form>

        {dishState.map((el, index) => (
          <h2 className={styles.dish__desc} key={index}>
            {el.name}: {el.price}
            {el.currency} за шт, {el.sum}
            {el.currency} сумма
          </h2>
        ))}
      </div>

      {dishState.length < 1 ? null : (
        <div className={styles.btn__end}>
          <button onClick={onShowCheckCardComponent}>Закончить</button>
        </div>
      )}
    </div>
  )
}
