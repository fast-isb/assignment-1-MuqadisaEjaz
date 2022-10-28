import './App.css';
import NavBar from './components/NavBar.js'
import Announcements  from './components/Announcements';
import ManageProperty from './components/ManageProperty';
import ComplaintStatus from './components/Complaints/ViewComplaints';
import CustomerService from './components/CustomerService';
import Profile from './components/profile';
import CreateComplaints from './components/Complaints/CreateComplaints' 
import CancelComplaints from './components/Complaints/CancelComplaints'
import HomePage from './components/HomePage';
import {  BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div >
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/HomePage' element ={<HomePage/>} />
        <Route path='/announcements' element ={<Announcements/>} />
        <Route path='/ManageProperty' element ={<ManageProperty/>} />
        <Route path='/CustomerService' element ={<CustomerService/>} />
        <Route path='/ComplaintStatus' element ={<ComplaintStatus/>} />
        <Route path='/CreateComplaints' element ={<CreateComplaints/>} />
        <Route path='/CancelComplaints' element ={<CancelComplaints/>} />
        <Route path='/profile' element ={<Profile/>} />
        <Route path='*' element={<h1>Error</h1>} />
      </Routes >
     </BrowserRouter>
    </div>
  );
}

export default App;
