import React, { useState, useEffect } from 'react';
import Form from './components/Form/index.jsx';
import Table from './components/Table/index.jsx';
import Container from './components/Container/index.jsx';
import axios from 'axios';
import '../node_modules/scss-reset/src/scss/_reset.scss';

// const App = () => {  return <Container name="1"> <Form data={1}/><Table/></Container>    }

const App = () => {

// <Table data={1}>      --- forma gitmesi gereken veriler içeri gönderiler.   -- array tipinde veri

// <Container buse="1" >      --- inspect -> 

const [datas,setDatas] =useState([])
const userHeading = ["First Name","Last Name","Email"]
const billHeading = ["Bill No","Product Name","Amount","Confirmed"]

useEffect(() => {
  axios.get('http://localhost:8010/bills')   // get methoduyla tüm tablo alınmış olur
.then(function (response) {
  // handle success
  console.log(response);
  if(response.data.length > 0){
      setDatas(response.data);
  }
})
.catch(function (error) {
  // handle error
  console.log(error);
})
.then(function () {
  // always executed
});
}, []);


  return <Container>       
          <Form/>
          <Table data={datas} head={userHeading}/>
          <Table data={datas} head={billHeading}/>
        </Container>    
}
export default App;
