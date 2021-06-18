import React from 'react';
import styles from "./PrimaryButton.module.scss"
const PrimaryButton = React.forwardRef((props, ref) => (
    <button {...props} ref={ref} className={styles.PrimaryButton}>
        {props.children}
    </button>
));

export default PrimaryButton;