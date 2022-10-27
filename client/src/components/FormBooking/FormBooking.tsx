import React, { FC } from 'react';
import styles from "./FormBooking.module.scss"
import CheckInOut from "../UI/MyInputs/CheckInOut";
import MySelect from "../UI/MySelect/MySelect";
import MyButton from "../UI/MyButton/MyButton";

interface FormBookingProps {
    title: string,
}

const FormBooking: FC<FormBookingProps> = ({ title }) => {
    return (
        <div className={styles.formWrapper}>
            <div className={styles.booking}>
                <h3 className={styles.titleHeading}> { title } </h3>
                <form action="#">
                    <div className={styles.checkData}>
                       <CheckInOut
                           inputFor="Check In:"
                       />
                       <CheckInOut
                           inputFor="Check Out:"
                       />
                        <MySelect
                            selectFor="Guests:"
                            firstOption="2 Adults"
                            secondOption="3 Adults"
                        />
                        <MySelect
                            selectFor="Room:"
                            firstOption="2 Adults"
                            secondOption="3 Adults"
                        />
                        {/*or Redirect to another page*/}
                        <MyButton
                            btnCapture="Check Availability"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormBooking;