import React from 'react';
import styles from './Sellform.module.css';
import { useNavigate } from 'react-router-dom';


export const SellForm: React.FC<{}> = () => {

    const navigateTo = useNavigate();


    return (
        <div >
            <div className={styles.container}>
                <h1>SELL FORM</h1>
            </div>
            <div>
            <div className={styles.submitform}>
                <h1>Input fields</h1>
                <label>Name: </label>
                <input type="text" />
                <br />
                <label>Email: </label>
                <input type="text" />
                <br />
                <label>Shoe Description: </label>
                <input type="text" />
                <br />
                <label>Asking Price: </label>
                <input type="text" />
                <br />
                <label>Pictures: </label>
                <input type="file" />
                <br />
                <br />
                <button onClick= {()=> {navigateTo('/sellForm/submit');}}>SELL</button>
            </div>
            </div>
            

        </div>
        
    )
}
