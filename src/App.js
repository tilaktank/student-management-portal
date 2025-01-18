import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddEntries from './pages/AddEntries/AddEntries'
import UpdateEntries from './pages/UpdateEntries/UpdateEntries'
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-entries" element={<AddEntries />} />
        <Route path="/update-entries" element={<UpdateEntries />} />
      </Routes>
    </>
  );
}

export default App;
