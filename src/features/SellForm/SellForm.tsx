import React from 'react';
import styles from './Sellform.module.css';
import { useNavigate } from 'react-router-dom';


export const SellForm: React.FC<{}> = () => {

    const navigateTo = useNavigate();


    return (
        <div className={styles.bigcontainer}>
            {/* <div className={styles.container}>
                <h1>SELL FORM</h1>
            </div> */}
            <div>
                <br />
                <br />

            <div className={styles.submitform}>
                <h1>Let's get you started with your first sale!</h1>
                <label>Name: </label>
                <input type="text" placeholder='Enter your full name' />
                <br />
                <label>Email: </label>
                <input type="text" placeholder='Enter a valid email' />
                <br />
                
                <label>Asking Price: </label>
                <input type="text" placeholder='Enter your selling price'/>
                <br />
                <label>Condition:</label>
                <select id="condition" name="condition">
                    <option value="New">New</option>
                    <option value="Slightly worn">Slightly worn</option>
                    <option value="More than slightly worn">More than slightly worn</option>
                    <option value="Quite worn">Quite worn</option>
                </select>
                <br/>
                <label>Pictures: </label>
                <input type="file" />
                <br />
                <label>Shoe Description: </label>
                <input className={styles.description} type="text" placeholder='Please enter the brand of the shoe and any other details' />
                <br />
                <button onClick= {()=> {navigateTo('/sellForm/submit');}}>SELL</button>
            </div>
            </div>
            

        </div>
        
    )
}
