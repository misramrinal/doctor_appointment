import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Item from './components/item'
import Button from './components/button';
import './styles.css'
import Counter from './components/counter';
import { getPosts } from './api';
import { useEffect, useState } from 'react';
import ClinicImage from './components/pics/clinic.jpg';
import CallIcon from './components/pics/call.jpg';
import VideoCall from './components/pics/video.jpg';
function App() {
  const [data, setdata] = useState(null)
  useEffect(() => {
    getPosts().then(posts => setdata(posts))
  },[])
  return (
    <div className='ToDo-Container'>
    Dr. Manik Dalvi
    <p>Obstetrics & Gynecology</p>
    <button class="neon-button">View Profile</button>
    <hr class="horizontal-line"></hr>
    <span >Book Appointment</span>
    <span>Fees approx Rs. 500</span>
    <img src={ClinicImage} alt="Description of the image" class='icon'></img>
    <img src={CallIcon} alt="Description of the image" class='icon'></img>
    <img src={VideoCall} alt="Description of the image" class='icon'></img>
    <p>
      <span class="one">In - Clinic</span>
      <span class="two"> Audio</span>
      <span class="one">Video</span>
    </p>
    <p>
      <h3>Clinic Name</h3>
      <button class="small-green-button"></button>
      <span>Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre,
      Opp. Bopal Nagar, Maharastra, 321302</span>
      <hr class="horizontal-line" ></hr>

    </p>
    
    </div>
  );
}

export default App;
