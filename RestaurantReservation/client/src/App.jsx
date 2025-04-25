import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './pages/About';
import Services from './pages/Services';
import Team from './pages/Team';
import Reservation from './pages/Reservation'; 
import ReservationForm from './components/ReservationForm'; 
import TrackReservation from './components/TrackReservation'; 
import OurMenu from './pages/OurMenu';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/reservation" element={<Reservation />} /> 
        <Route path="/do-reservation" element={<ReservationForm />} /> 
        <Route path="/track-reservation" element={<TrackReservation />} />
        <Route path="/menu" element={<OurMenu />} />
      </Routes>
    </Router>
  );
}

export default App;
