import React, { useState, useEffect } from 'react';
import Form from './components/Form/index.jsx';
import Table from './components/Table/index.jsx';
import Container from './components/Container/index.jsx';
import axios from 'axios';
import '../node_modules/scss-reset/src/scss/_reset.scss';


const App = () => {

const [datas,setDatas] =useState([])
const userHeading = ["First Name","Last Name","Email"]
const billHeading = ["Bill No","Product Name","Amount","Confirmed"]

useEffect(() => {
  axios.get('http://localhost:8010/bills')   // get methoduyla tüm tablo alınmış olur
.then(function (response) {
  console.log(response);
  if(response.data.length > 0){
      setDatas(response.data);
  }
})
.catch(function (error) {
  console.log(error);
})
.then(function () {
});
}, []);

const [users, setUsers] = useState([]);
const [bills, setBills] = useState([]);
useEffect(() => {
  const usersArr = [];
  const billArr = [];
  datas.map((mapItem,i) => {
    
    const billCol = { first: mapItem.billNo, second: mapItem.productName, third: mapItem.amount, fourth:mapItem.confirmed };
    
    let userCol = null;
    if (usersArr.filter((x) => x.third === mapItem.email).length === 0) {
      userCol = {
        first: mapItem.firstName,
        second: mapItem.lastName,
        third: mapItem.email,
      };
      usersArr.push(userCol);
  }

    billArr.push(billCol);
  });
  setUsers(usersArr);
  setBills(billArr);
}, [datas]);



  return <Container>       
          <Form/>
          <Table  head={userHeading} tableData={users}/>
          <Table data={datas} head={billHeading} tableData={bills}/>
        </Container>    
}
export default App;
