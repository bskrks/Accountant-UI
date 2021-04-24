import Form from './components/Form/index.jsx';
import Table from './components/Table/index.jsx';
 import Container from './components/Container/index.jsx';
import React from 'react';
//import './App.scss';
import '../node_modules/scss-reset/src/scss/_reset.scss';

// const App = () => {  return <Container name="1"> <Form data={1}/><Table/></Container>    }

const App = () => {

  return <Container>
          <Form/>
          <Table/>
        </Container>    
}
export default App;
