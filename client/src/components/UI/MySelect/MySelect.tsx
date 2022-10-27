import React, {FC} from 'react';
import styles from "./MySelect.module.scss"

interface MySelectProps {
    firstOption: string,
    secondOption: string,
    selectFor: string
}

const MySelect: FC<MySelectProps> = ({ firstOption, secondOption, selectFor }) => {
    return (
        <div className={styles.mySelectContainer}>
            <label className={styles.myLabel} htmlFor="select smth">{ selectFor }</label>
            <select
                className={styles.mySelect}
                name="select"
                id="select smth"
            >
                <option defaultValue="true" value="value1"> { firstOption } </option>
                <option value="value2"> { secondOption } </option>
            </select>
        </div>
    );
};

export default MySelect;