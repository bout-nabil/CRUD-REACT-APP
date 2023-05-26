import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './Components/UserList';
import AddUser from './Components/AddUser';
import UpdateUser from './Components/UpdateUser';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>CRUD React App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserList />} />
          <Route path='/add-user' element={<AddUser />} />
          <Route path='/update-user/:id' element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
