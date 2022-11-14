import React, { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Product.module.css";

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "lorem ipsum dolor sit amet, consectetur",
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.ingContainer}>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>
      </div>
      {/* {end of left} */}

      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Choose your preferred size</h3>

        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/image/size.png" layout="fill" alt="size" />
            <span className={styles.number}>Small </span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/image/size.png" layout="fill" alt="size" />
            <span className={styles.number}> Medium </span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/image/size.png" layout="fill" alt="size" />
            <span className={styles.number}>Large </span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredient</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor=""> Double ingredients</label>
          </div>

          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor=""> Extra Cheese</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor=""> Spicy Sauce</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="Garlic"
              name="Garlic"
              className={styles.checkbox}
            />
            <label htmlFor=""> Garlic Sauce</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity}/>
          <button className={styles.button}>Add to Cart</button>
        </div>
      </div>
      {/* {end of right} */}
    </div>
  );
};

export default Product;
