import ReactDOM from 'react-dom/client';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Landing from './Pages/Landing';
import { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [user,setuser] = useState([{
    username : "guhan",
    password : "123"
}])

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login user={user} setuser={setuser}/>}> </Route>
        <Route path='/Signup' element={<Signup user={user} setuser={setuser}/>}> </Route>
        <Route path='/Landing' element={<Landing />}> </Route>
      </Routes>
    </BrowserRouter>
  )
}

root.render(
  <App />
);
export default App;
