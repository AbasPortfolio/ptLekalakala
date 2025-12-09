import React from 'react';
import Sidebar from '../organisms/SideBar';
import { ItemNav } from '../utils/utils.ts';
import HomeImg from '../assets/reception.jpg';
import '../styles/home.css';

const HomePage: React.FC = () => {
    const dark: boolean = JSON.parse(localStorage.getItem('dark') || 'false');
    document.body.style.backgroundColor = dark ? "#131619" : "#e3eed4";

    return (
        <div className="home-page-container" style={{ backgroundColor: dark ? 'black' : 'white', color: dark ? 'white' : 'black' }}>
            <Sidebar items={ItemNav.Home} />
            <div className="main-content">
                <h1  style={{ color: dark ? 'white' : 'black' }}>Welcome to Lekalakala Dental Clinic.</h1>
                <p>
                    This Electronic Health Record (EHR) system is designed to streamline the management of patient records and other crucial information for Lekalakala Clinic.
                </p>

                
            </div>
           <div>
                    <img src={HomeImg} className='homeImg' alt="Home Image" />
               </div>
        </div>
    );
}

export default HomePage;
