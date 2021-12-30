import React from 'react'
import styles from './MainPage.module.css'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div className={styles.main__page}>
      <h1 className={styles.main__title}>
        Let`s find out what kind of party did you have.
      </h1>

      <div className={styles.two__ways}>
        <div className={styles.easy__way}>
          <h2>Proud way.</h2>
          <p className={styles.easy__desc}>
            You guys have no trouble splitting the check between everyone who
            was involved in the meal. You dont want to waste time, endlessly
            finding out what meal did your pal eat or what drink he ordered.
          </p>
          <Link to="/proud-way">
            <button>Do I really need your help ?</button>
          </Link>
        </div>
        <div className={styles.hard__way}>
          <h2>Shameless way.</h2>
          <p className={styles.easy__desc}>
            I dont know why it came to this. It could be financial. Could be a
            habit since when you guys were younger. Whatever. We are here, and
            I`ll help you. But.. you know.
          </p>
          <Link to="/shameless-way">
            <button>Let`s finish with this</button>
          </Link>
        </div>
      </div>
    </div>
  )
}
