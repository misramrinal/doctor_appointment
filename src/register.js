import logo from './logo.svg';
import './App.css';
import Header from './components/header'
import Item from './components/item'
import Button from './components/button';
import './styles.css'
import Table from './components/table';
import Counter from './components/counter';
import { getPosts } from './api';
import { useEffect, useState } from 'react';
import ClinicImage from './components/pics/clinic.jpg';
import CallIcon from './components/pics/call.jpg';
import VideoCall from './components/pics/video.jpg';
import MobileNumberForm from './components/mobilenumber';
function Register() {
  
  const [data, setdata] = useState(null)
  useEffect(() => {
    getPosts().then(posts => setdata(posts))
  },[])
    const [showTable, setShowTable] = useState(false);
    const handleButtonClick = () => {
      setShowTable(false); // Set showTable state to true when the button is clicked
    };
  return (
    <div className='ToDo-Container'>
    Dr. Manik 
    <p>Obstetrics & Gynecology</p>
    <button class="neon-button">View Profile</button>
    <hr class="horizontal-line"></hr>
    <p >Appointment Summary</p>
    <p>Fees approx Rs. 500 (Pay at Clinic)</p>
    <img src={ClinicImage} alt="Description of the image" class='icon registration'></img>
    {/* <img src={CallIcon} alt="Description of the image" class='icon'></img> */}
    {/* <img src={VideoCall} alt="Description of the image" class='icon'></img> */}
  
      <span class="one">In - Clinic Consultation</span>
      {/* <span class="two"> Audio</span> */}
      {/* <span class="one">Video</span> */}
  
    {/* <p>
      <h3>Clinic Name</h3>
      <button class="small-green-button"></button>
      <span>Manik Dalvi's Clinic, Kalyan Naka, Rk Business Centre,
      Opp. Bopal Nagar, Maharastra, 321302</span>
      <hr class="horizontal-line" ></hr>
    </p> */}
    <p>
      <h3>Enter Phone Number to Continue</h3>
      Please enter your Whatsapp number to recieve timely updates.
      <MobileNumberForm/>

    </p>

   <Table/> 
    </div>
  );
}

export default Register;
