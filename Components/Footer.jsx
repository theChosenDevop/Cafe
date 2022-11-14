import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>

      <div className={styles.item}>
        <Image
          className="image"
          src="/img/bg.png"
          layout="fill"
          alt="banner"
          width={400}
          height={700}
          objectFit="cover"
          loading="lazy"
        />
      </div>

      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES WE ARE.
            <br /> THE LAMA PIZZA,
            <br /> WELL BAKED SLICE OR PIZZA.
          </h2>{" "}
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            5, Fatade street Ipaja
            <br /> Lagos, 100124
            <br />
            (+234) 7061 4501 3812
          </p>
          <p className={styles.text}>
            9, Victory Estate, Osapa London
            <br /> Lagos, 100124
            <br />
            (+234) 7060 3129 3012
          </p>
          <p className={styles.text}>
            8, Kilanko Bus stop Ilorin
            <br /> Lagos, 100124
            <br />
            (+234) 7063 2132 6745
          </p>
          <p className={styles.text}>
            3, Ogunlana Crescent , Ayobo
            <br /> Lagos, 100124
            <br />
            (+234) 7064 4521 3412
          </p>

          <p className={styles.text}>
            3, Fadairo Street Olude Ipaja
            <br /> Lagos, 100124
            <br />
            (+234) 7069 2412 3412
          </p>
        </div>

        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 - 24:00
          </p>
        </div>
      </div>

    </div>
  );
};

export default Footer;
