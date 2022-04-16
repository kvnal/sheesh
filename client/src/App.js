import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './Components/Components/Navbar';
import Home from './Components/Pages/Home';
import Amigos from './Components/Pages/Amigos';
import Community from './Components/Pages/Community';
import BottomNavBar from './Components/Components/BottomNavBar';
import LookBook from './Components/Pages/LookBook';
import Profile from './Components/Pages/Profile';
import Chat from "./Components/Pages/Chat"
import SplashScreen from './Components/Pages/SplashScreen';
import { useEffect, useState } from 'react';
import LookBookStudent from './Components/Pages/LookBookStudent';
import CommunityIndividual from './Components/Pages/CommunityIndividual';

function App() {
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    setInterval(() => {
      setSplashScreen(false);
    }, 2000);
  }, []);

  if(splashScreen) return(
    <SplashScreen/>
  );

  return (
   <div >
     <Navbar/>

      <div className='fragment  mt-16 mb-20'>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="amigos" element={<Amigos />} />
        <Route exact path="community" element={<Community />} />
        <Route path="community/:id" element={<CommunityIndividual />} />
        <Route exact path="lookbook" element={<LookBook />} />
        <Route path="lookbook/:id"   element={<LookBookStudent />} />
        <Route path="chat/:id"   element={<Chat />} />
        <Route path="profile"   element={<Profile />} />

      </Routes>
      </div>
      <BottomNavBar/>
   </div>
  );
}

export default App;
