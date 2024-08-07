import React from 'react';
import NavbarHeader from '../components/NavbarHeader/NavbarHeader';
import "../page/Home.scss";

function Home(props) {
    return (
        <div className='Home-container'>
            <NavbarHeader />
            <div className="main"></div>
        </div>
    );
}

export default Home;