import React from 'react';
import styles from'./styles.module.scss';
import axios from "axios";
import { useState } from 'react'; 
import { useEffect} from 'react';

function Form() {

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName:'',
    email: '',
    billNo:'',
    productName:'',
    amount:'',
  });



/*
  const getFormValues = async () => {
    let res = await axios.get("localhost:3000");
    let { data } = res.data;
    this.setState({ formValues: data });
  };

*/

  function handleFormValuesChange(e,inputName) {  // parametresiz => switch(e.name)

    switch(inputName){
      case "firstName":
        if(e.target.value.match(/^[a-zA-ZğüşöçİĞÜŞÖÇı\s]*$/)){
          setFormValues({
            ...formValues,
            [inputName]: e.target.value,
          });
      }
      break;
      case "lastName":
        if(e.target.value.match(/^[a-zA-Z]+$/)){
          setFormValues({
            ...formValues,
            [inputName]: e.target.value,
        });
      }
      break;
      case 'billNo':
        setFormValues({
          ...formValues,
          [inputName]: e.target.value,
        });
        break;
      case 'productName':
        if(e.target.value.match(/^[a-zA-Z]+$/)){  
          setFormValues({
            ...formValues,
            [inputName]: e.target.value,
          });
        }
      break;
      case 'amount':
        if(e.target.value.match(/^[0-9]+$/)){
          setFormValues({
            ...formValues,
            [inputName]: e.target.value,
          });
        }
      break;
      case 'email':
        setFormValues({
          ...formValues,
          [inputName]: e.target.value,
        });
      break;
    }
  };

  const handleSubmit = e => { 
    e.preventDefault();
    const {productName,amount,billNo} = formValues;
    if(!formValues.email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        alert("Invalid E-mail");
    }
    else{
      console.log(formValues);
      axios.post('http://localhost:8010/bills', {
        productName,
        amount ,
        billNo ,
        userId :15
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
      })
      .catch(function (error) {
        console.error(error);
      });
    }
    /*
    if(formValues.billNo.indexOf(1).match(/^[a-zA-Z]+$/) && formValues.billNo.indexOf(2).match(/^[a-zA-Z]+$/)){
      if(formValues.billNo.indexOf())
    }*/
  }

  return (
  <form className={styles.fStyle} onSubmit={(e)=> handleSubmit(e)}>
  <h3 className={styles.h3Style}>
    PLEASE FILL THE FORM
  </h3>
  <div className={styles.formDiv}>
    <label className={styles.lStyle} >FIRST NAME:</label>
    <input className={styles.iStyle} type="text" onChange={(e) => handleFormValuesChange(e,'firstName')} value={formValues.firstName} name="firstName" placeholder="John"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>LAST NAME:</label>
    <input className={styles.iStyle} type="text" onChange={(e) => handleFormValuesChange(e,'lastName')} value={formValues.lastName} name="lastName" placeholder="Doe"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>E-MAIL:</label>
    <input className={styles.iStyle} type="text"  onChange={(e) => handleFormValuesChange(e,'email')} value={formValues.email} name="email" placeholder="John@Doe.com"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>PRODUCT NAME:</label>
    <input className={styles.iStyle} type="text" onChange={(e) => handleFormValuesChange(e,'productName')} value={formValues.productName} name="productName" placeholder="Microphone"></input>
  </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>AMOUNT:</label>
    <input className={styles.iStyle} type="text"  onChange={(e) => handleFormValuesChange(e,'amount')} value={formValues.amount} name="amount" placeholder="45"></input>
    </div>
  <div className={styles.formDiv}>
    <label className={styles.lStyle}>BILL NO:</label>
    <input className={styles.iStyle} type="text" onChange={(e) => handleFormValuesChange(e,'billNo')} value={formValues.billNo} name="billNo" placeholder="TR000"></input>
  </div>
  <div className={styles.formButton}>
    <input className={styles.bStyle} type="submit"  value="SEND"></input>
  </div>
  
</form> 
  );
} 
export default Form;
