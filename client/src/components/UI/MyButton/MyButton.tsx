import React, { FC } from 'react';
import styles from "./MyButton.module.scss"

interface MyButtonProps {
    btnCapture: string
}

const MyButton: FC<MyButtonProps> = ({ btnCapture }) => {

    const someClick = (e: any) => {
        ///preventDefault not to refresh the browser
        e.preventDefault()
    }

    return (
        <div className={styles.myButtonContainer}>
            <button
                onClick={someClick} /// prevented
                className={styles.actualBtn}
                type="submit"
            >
                { btnCapture }
            </button>
        </div>
    );
};

export default MyButton;