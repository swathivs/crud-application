import { Route, Routes, useNavigate } from 'react-router-dom';
import { AppBar, Button, Toolbar } from '@mui/material';
import './App.css';
import AddUser from './components/AddUser';
import StudentList from './components/StudentList';
import Home from './components/Home';
import EditUser from './components/EditUser';

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
    <AppBar position="static"> 
    <Toolbar>
      <div className='dashboard'>
      <Button color='inherit' onClick={()=> navigate("/")}>Home</Button>
      <Button color='inherit' onClick={()=> navigate("/users")}>Users</Button>
      <Button color='inherit' onClick={()=> navigate("/adduser")}>Add User</Button>
      </div>
    </Toolbar>
    </AppBar> 
      <Routes>
      <Route path="/" element={<Home/>}/>
      {/* <Route path="/home" element={<}/> */}
      <Route path="/users" element={<StudentList/>} />
      <Route path="/adduser" element={<AddUser/>} />
      <Route path="/users/edit/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
