import Form from './components/Form/index.jsx';
import Table from './components/Table/index.jsx';
import Container from './components/Container/index.jsx';
import React from 'react';
import axios from 'axios';
import '../node_modules/scss-reset/src/scss/_reset.scss';

// const App = () => {  return <Container name="1"> <Form data={1}/><Table/></Container>    }

const App = () => {

// <Table data={1}>      --- forma gitmesi gereken veriler içeri gönderiler.   -- array tipinde veri

// <Container buse="1" >      --- inspect -> 



  return <Container>       
          <Form/>
          <Table/>
        </Container>    
}
export default App;
