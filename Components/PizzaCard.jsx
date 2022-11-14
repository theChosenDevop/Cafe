import React from 'react'
import Image from  'next/image'
import styles from '../styles/PizzaCard.module.css'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src='/img/pizza.png' alt='FIORI DI ZUCCA' height='100' width='100'/>
    <h1 className={styles.title}>FIORI DI ZUCCA</h1>
   <span className={styles.price}>
    $19.90
   </span>
   <p className={styles.desc}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse ea, optio obcaecati iure natus error vero sapiente commodi dolore quo nulla corrupti. Vel illum nulla, fugit provident saepe voluptatum.
   </p>
    </div>
  )
}

export default PizzaCard