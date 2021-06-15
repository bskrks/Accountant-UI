import React, { useState } from 'react';
import axios from "axios";
import styles from'./styles.module.scss';
import Modals from './../Modal'

function Form() {

  const [formValues, setFormValues] = useState({
    firstName: localStorage.getItem('FormValuesLocalStorage') ? JSON.parse(localStorage.getItem('FormValuesLocalStorage')).firstName : '',
    lastName: localStorage.getItem('FormValuesLocalStorage') ? JSON.parse(localStorage.getItem('FormValuesLocalStorage')).lastName : '',
    email: localStorage.getItem('FormValuesLocalStorage') ? JSON.parse(localStorage.getItem('FormValuesLocalStorage')).email : '',
    billNo:localStorage.getItem('FormValuesLocalStorage') ? JSON.parse(localStorage.getItem('FormValuesLocalStorage')).billNo : '',
    productName:localStorage.getItem('FormValuesLocalStorage') ? JSON.parse(localStorage.getItem('FormValuesLocalStorage')).productName : '',
    amount:localStorage.getItem('FormValuesLocalStorage') ? JSON.parse(localStorage.getItem('FormValuesLocalStorage')).amount : '',
  });

  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [selectMessage, setSelectMessage] = useState("");

  const allMessages={empty:'Empty fields must be filled out !',incorrect:'Email is incorrect !',limit:'If your total amount is more than 200 then your bill confirmed value will be not confirmed.'}

  const [idValue, SetIdValue] = useState({
    id:''
  });

  let now = new Date().getTime();  // şimdiki  zaman

  const data=
  {
    savedTime:'',
    data:
    {
      firstName:'',
      lastName:'',
      billNo:'',
      productName:'',
      amount:'',
      email:''
    }
  }
  
  const onlyLettersAndSpace = (p) => {
    const regex = new RegExp(/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/); 
    return regex.test(p);
  }

  const onlyNumbersAndSpace = (p) => {
    const regex = new RegExp(/^[0-9]*$/);  
    return regex.test(p);
  }

  function handleFormValuesChange(e,inputName) {        
    console.log(e.target.value);
    switch(inputName){
      case "firstName":
        if(onlyLettersAndSpace(e.target.value)){
          setFormValues({
            ...formValues,
            [inputName]: e.target.value,
        });
       data.data.firstName=e.target.value;
      }
      break;
      case "lastName":
        if(onlyLettersAndSpace(e.target.value)){
          setFormValues({
            ...formValues,
            [inputName]: e.target.value,
        });
       data.lastName=e.target.value;
      }
      break;
      case 'billNo':
        setFormValues({
          ...formValues,
          [inputName]: e.target.value,
        });
       data.billNo=e.target.value; 
       break;
      case 'productName':
        if(onlyLettersAndSpace(e.target.value)){  
          setFormValues({
            ...formValues,
            [inputName]: e.target.value,
          });
          data.productName=e.target.value;
        }
      break;
      case 'amount':
        if(onlyNumbersAndSpace(e.target.value)){
          setFormValues({
            ...formValues,
            [inputName]: e.target.value,
          });
         data.amount=e.target.value;
        }
      break;
      case 'email':
        setFormValues({
          ...formValues,
          [inputName]: e.target.value,
        });
        data.email=e.target.value;
        break;
    } 
    console.log(handle);
  };

  const handle = {
    data:formValues,
    savedTime:now
 }
  React.useEffect(() => {
    console.log(formValues);
    localStorage.setItem('FormValuesLocalStorage', JSON.stringify(handle));         // [Object Object] hatası çözümü için stringify
  }, [formValues]);

  const handleSubmit = async(e) => { 
    
    const buttonTime = new Date().getTime();
    const expiry = 5000;

    let timer = now-buttonTime;

    const handleButton = {
      savedTime:buttonTime
   }

    if(timer > expiry){
      localStorage.removeItem('FormValuesLocalStorage');
    }

    e.preventDefault();
    const {firstName,lastName,email,productName,amount,billNo} = formValues;
   
    if(!formValues.firstName || !formValues.lastName || !formValues.email|| !formValues.productName || !formValues.billNo || !formValues.amount){
      setSelectMessage(allMessages.empty);
      setIsErrorModalOpen(true);
    }
    else{
     if(!formValues.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        setSelectMessage(allMessages.incorrect);
        setIsErrorModalOpen(true);
      }
      else{

        console.log(formValues); // Butona bastığımızda bütün formValues değerlerinin gelmesinin kontrolüsss

        await axios.post('http://localhost:8010/users', {   
          firstName,                                        // postman'deki body tarafı
          lastName ,
          email ,
        })
        .then(function (response) {
          idValue.id=response.data;
          console.log(idValue.id);
        })
        .catch(function (error) {
          console.error(error);
        });

        await axios.post('http://localhost:8010/bills', {
          productName,
          amount ,
          billNo ,
          userId: idValue.id
        })
        .then(function (response) {
          console.log(response);
          setFormValues({
            firstName: '',
            lastName:'',
            email: '',
            billNo:'',
            productName:'',
            amount:'',
          })
          if(!response.status==200)
          {
              alert("Failed !!");
          }
        })
        .catch(function (error) {
          console.error(error);
        });  
      }
    }
  }
//<Form prop={}/>
  return (
<>
  <form className={styles.fStyle} onSubmit={(e)=> handleSubmit(e)}>
  <h3 className={styles.h3Style}>
    PLEASE FILL THE FORM
  </h3>
  <div className={styles.formDiv}>
    <label className={styles.lStyle} ><span className={styles.spanStyle}>*</span>FIRST NAME:</label>
    <input className={styles.iStyle} type="text" onChange={(e) => handleFormValuesChange(e,'firstName')} value={formValues.firstName} name="firstName" placeholder="John"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}><span className={styles.spanStyle}>*</span>LAST NAME:</label>
    <input className={styles.iStyle} type="text" onChange={(e) => handleFormValuesChange(e,'lastName')} value={formValues.lastName} name="lastName" placeholder="Doe"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}><span className={styles.spanStyle}>*</span>E-MAIL:</label>
    <input className={styles.iStyle} type="text"  onChange={(e) => handleFormValuesChange(e,'email')} value={formValues.email} name="email" placeholder="John@Doe.com"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}><span className={styles.spanStyle}>*</span>PRODUCT NAME:</label>
    <input className={styles.iStyle} type="text" onChange={(e) => handleFormValuesChange(e,'productName')} value={formValues.productName} name="productName" placeholder="Microphone"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}><span className={styles.spanStyle}>*</span>AMOUNT:</label>
    <input className={styles.iStyle} type="text"  onChange={(e) => handleFormValuesChange(e,'amount')} value={formValues.amount} name="amount" placeholder="45"></input>
    </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}><span className={styles.spanStyle}>*</span>BILL NO:</label>
    <input className={styles.iStyle} type="text" onChange={(e) => handleFormValuesChange(e,'billNo')} value={formValues.billNo} name="billNo" placeholder="TR000"></input>
  </div>
  <div>
    <p className={styles.pStyle}>All fields marked with * are required</p>
  </div>
  <div className={styles.formButton}>
  <input className={styles.bStyle} type="submit"  value="SEND"></input>
  </div>
</form> 
<Modals isOpen={isErrorModalOpen} handleCloseModal={()=>setIsErrorModalOpen(false)} message={selectMessage}></Modals>
</>
  );
} 
export default Form;
