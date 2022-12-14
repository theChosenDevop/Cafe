import React from "react";
import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {
    const status = 0

    const statusClass = (index) => {
        if(index - status < 1) return styles.done
        if(index - status === 1) return styles.inprogress
        if(index - status > 1) return styles.undone
    }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
           <tbody>
           <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>
                <span className={styles.id}>2450930609735</span>
              </td>
              <td>
                <span className={styles.name}>John DOe</span>
              </td>
              <td>
                <span className={styles.address}>
                  32, Animashaun, Ladipo Busstop
                </span>
              </td>
              <td>
                <span className={styles.total}>$39.90</span>{" "}
              </td>
            </tr>
           </tbody>
          </table>
        </div>
        <div className={styles.row}>
            <div className={statusClass(0)}>
                <Image className={styles.checkedIcon} src='/img/paid.png' width={30} height={30}  alt='paid'/>
                <span>Payment</span>
                <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} alt='checked'/>
                </div>
            </div>
            <div className={statusClass(1)}>
                <Image className={styles.checkedIcon} src='/img/bake.png' width={30} height={30}  alt='paid'/>
                <span>Preparing</span>
                <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} alt='checked'/>
                </div>
            </div>
            <div className={statusClass(2)}>
                <Image className={styles.checkedIcon} src='/img/bike.png' width={30} height={30}  alt='paid'/>
                <span>On the way</span>
                <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src='/img/checked.png' width={20} height={20} alt='checked'/>
                </div>
                </div>
            <div className={statusClass(3)}>
                <Image className={styles.checkedIcon} src='/img/delivered.png' width={30} height={30}  alt='paid'/>
                <span>Delivered</span>
                <div className={styles.checkedIcon}>
                    <Image src='/img/checked.png' width={20} height={20} alt='checked'/>
                </div>
            </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:$12.30</b>
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:$0.40</b>
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:$36.50</b>
          </div>
          <button className={styles.button}>PAID</button>
        </div>
      </div>
    </div>
  );
};

export default Order;
