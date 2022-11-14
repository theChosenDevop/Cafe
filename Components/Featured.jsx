import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";

const Featured = () => {
  const [index,setIndex] = useState(0)

  const images = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.arrowContainer} style={{ left: 0}} onClick={()=> handleArrow('l')}>
        <Image src="/img/arrowl.png" alt="" width='50' layout="fill" height='50' objectFit="contain" />
      </div>

      <div className={styles.wrapper}>
        {images.map((img, i) => {
          <div className={styles.imgContainer} key={i}>
            <Image src={img} alt="" layout="fill" objectFit="contain" />
          <Image src='/img/featured.png' alt="" layout="fill" />
          </div>;
        })}
      </div>
      <div className={styles.arrowContainer} style={{ right: 0}} onClick={()=> handleArrow('r')}>
        <Image src="/img/arrowr.png" width='50' height='50' alt=""  layout="fill" objectFit="contain" />
      </div>
      Readyrenc
    </div>
  );
};

export default Featured;
