import React, { useState } from 'react'
import BillCard from '../../shared/Components/BillCard/BillCard'
import CheckComponent from '../../shared/Components/CheckComponent/CheckComponent'
import DishCard from '../../shared/Components/DishCard/DishCard'
import PersonCard from '../../shared/Components/PersonCard/PersonCard'
import styles from './HardWay.module.css'

export default function HardWay() {
  const [personName, setPersonName] = useState('')
  const [showPersonInput, setShowPersonInput] = useState(true)
  const [personState, setPersonState] = useState([])

  const [dishName, setDishName] = useState('')
  const [dishPrice, setDishPrice] = useState()
  const [dishSumPrice, setDishSumPrice] = useState()
  const [showDishInput, setShowDishInput] = useState(false)
  const [dishState, setDishState] = useState([])

  const [showCheckCard, setShowCheckCard] = useState(false)
  const [showBillCard, setShowBillCard] = useState(false)

  function addName(event) {
    event.preventDefault()
    if (personName === '') return alert('Введите имя')
    const id = Date.now()

    let person = {
      id: id,
      name: personName,
      debt: 0,
    }

    setPersonState((personState) => [...personState, person])
    document.forms[0].reset()
  }

  console.log('personName', personName)

  function showDishCardComponent(event) {
    event.preventDefault()
    if (personName === '') return alert('Введите имя')
    if (personState.length === 0) return alert('Вы ничего не добавили')
    setShowPersonInput(false)
    setShowDishInput(true)
  }

  function addDish(event) {
    event.preventDefault()
    const id = Date.now()

    let dish = {
      id: id,
      name: dishName,
      price: dishPrice,
      sum: dishSumPrice,
      currency: 'руб',
    }

    setDishState((oldArray) => [...oldArray, dish])
    document.forms[0].reset()
  }

  function setDebt(dishId, personId) {
    const consumeAmount = prompt('Сколько съел/выпил ваш товарищ ?')
    const foundDish = dishState.find((dish) => dish.id === dishId)
    const foundPerson = personState.find((person) => person.id === personId)
    const debtAmount = foundDish.price * consumeAmount

    if (debtAmount > foundDish.sum)
      return alert('Неверно указано количество выпитого/съеденного')

    foundPerson.debt += debtAmount
  }

  function showCheckCardComponent(event) {
    event.preventDefault()
    setShowDishInput(false)
    setShowCheckCard(true)
  }

  function showBillCardComponent(event) {
    setShowCheckCard(false)
    setShowBillCard(true)
  }

  // console.log('dishState', dishState)
  console.log('personState', personState)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}></h1>

      {showPersonInput ? (
        <PersonCard
          setPersonName={setPersonName}
          addName={addName}
          personState={personState}
          showDishCardComponent={showDishCardComponent}
        />
      ) : null}

      {showDishInput ? (
        <DishCard
          setDishName={setDishName}
          setDishPrice={setDishPrice}
          setDishSumPrice={setDishSumPrice}
          onAddDish={addDish}
          onShowCheckCardComponent={showCheckCardComponent}
          dishState={dishState}
        />
      ) : null}

      {showCheckCard ? (
        <CheckComponent
          personState={personState}
          dishState={dishState}
          setDebt={setDebt}
          onShowBillComponent={showBillCardComponent}
        />
      ) : null}

      {showBillCard ? <BillCard personState={personState} /> : null}
    </div>
  )
}
