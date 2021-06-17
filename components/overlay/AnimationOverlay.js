import React from 'react'
import styles from "./overlay.module.scss"


export default function AnimationOverlay() {
    return (
        <div className={styles.bodyOverlay}>
          <div className={"loader"}></div>
        </div>
    )
}
