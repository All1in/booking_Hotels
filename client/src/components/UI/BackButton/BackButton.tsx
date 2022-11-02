import React, {FC} from 'react';
import styles from "./BackButton.module.scss"

interface BackButtonProps {
    text: string
}

const BackButton: FC<BackButtonProps> = ({ text }) => {
    return (
        <div>
            <button className={styles.actuallyButton}> { text } </button>
        </div>
    );
};

export default BackButton;