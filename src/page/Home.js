import React from 'react';
import NavbarHeader from '../components/NavbarHeader/NavbarHeader';
import "../page/Home.scss";
import Content from '../components/content/content';

function Home(props) {
    return (
        <div className='Home-container'>
            <NavbarHeader />
            <div className="contentPage-container">
            <Content/>
            </div>
        </div>
    );
}

export default Home;