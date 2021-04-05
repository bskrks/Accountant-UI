import React from 'react';
import styles from'./styles.module.scss';

//const Form = (props) =>{                        
function Form() {
  return (
  <form className={styles.fStyle}>
  <h3>
    PLEASE FILL THE FORM
  </h3>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>FIRST NAME:</label>
    <input className={styles.iStyle} type="text" id="fname" name="fname" placeholder="John"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>LAST NAME:</label>
    <input className={styles.iStyle} type="text" id="lname" name="lname" placeholder="Doe"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>E-MAIL:</label>
    <input className={styles.iStyle} type="email" pattern=".+@gmail\.com" id="lname" name="email" placeholder="John@Doe.com"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>PRODUCT NAME:</label>
    <input className={styles.iStyle} type="text" id="pname" name="pname" placeholder="Microphone"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>AMOUNT:</label>
    <input className={styles.iStyle} type="text" pattern="[0-9]{1,4}" id="amount" name="amount" placeholder="45"></input>
    </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>BILL NO:</label>
    <input className={styles.iStyle} type="text" id="bno" name="bno" placeholder="TR000"></input>
  </div>
  <div className={styles.formButton}>
    <input className={styles.bStyle} type="submit" value="SEND"></input>
  </div>
  
</form> 
  );
}
 
export default Form;