import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import HomePhoneList from './components/HomePhoneList';
import PhoneDetails from './components/PhoneDetails';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route path="/phones" element={<HomePhoneList />}/>
      <Route path="/phones/:id" element={<PhoneDetails />}/>
     </Routes>
    </div>
  );
}

export default App;
