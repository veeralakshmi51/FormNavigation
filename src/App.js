import React from 'react';
import Login from './Login';
import Form from './Form'

import {Routes,Route} from 'react-router-dom';
function App() {
  return (
   <Routes>
    
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Form/>}/>
      
    
   </Routes>
  );
}

export default App;
