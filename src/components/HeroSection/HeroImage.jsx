import React from 'react'
import Image from 'next/image'
import user1 from "/public/userdp1.png"
import user2 from "/public/userdp2.png"
import user3 from "/public/userdp3.png"
import user4 from "/public/userdp4.png"
import user5 from "/public/userdp5.png"
import styles from "./HeroImage.module.css"

const HeroImage = () => {
  return (
    <div className={`${styles.el}`}>

        <div className={styles.x}>
            <Image 
                src={user4}
                alt="user"
                className={` ${styles.y} w-12 h-12 sm:w-24 sm:h-24 `}
            />
        </div>

        <div className={styles.x2}>
            <Image 
                src={user2}
                alt="user"
                className={` ${styles.y} w-12 h-12 sm:w-24 sm:h-24`}
            />
        </div>

        <div className={styles.x3}>
            <Image 
                src={user1}
                alt="user"
                className={` ${styles.y} w-12 h-12 sm:w-24 sm:h-24 `}
            />
        </div>
        
        <div className={styles.x4}>
            <Image 
                src={user5}
                alt="user"
                className={` ${styles.y} w-12 h-12 sm:w-24 sm:h-24`}
            />
        </div>
        

        <div className={styles.x5}>
            <Image 
                src={user3}
                alt="user"
                className={` ${styles.y} w-12 h-12 sm:w-24 sm:h-24`}
            />
        </div>
        
        <div className={styles.x6}>
            <Image 
                src={user1}
                alt="user"
                className={` ${styles.y} w-12 h-12 sm:w-24 sm:h-24`}
            />
        </div>

    </div>
  )
}

export default HeroImage