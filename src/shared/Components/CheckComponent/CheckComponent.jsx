import React from 'react'
import CheckBody from '../CheckBody/CheckBody'
import CheckName from '../CheckName/CheckName'
import styles from './CheckComponent.module.css'

export default function CheckComponent({
  dishState,
  personState,
  setDebt,
  onShowBillComponent,
}) {
  return (
    <div>
      <div className={styles.check__container}>
        {dishState.map((dish) => (
          <div className={styles.check__card} key={dish.id}>
            <CheckName key={dish.id} dishName={dish.name} />

            {personState.map((person) => (
              <CheckBody
                key={person.id}
                personName={person.name}
                setDebt={setDebt}
                dishId={dish.id}
                personId={person.id}
              />
            ))}
          </div>
        ))}
      </div>
      <div className={styles.btn__calculate}>
        <button onClick={onShowBillComponent}>Рассчитать</button>
      </div>
    </div>
  )
}
