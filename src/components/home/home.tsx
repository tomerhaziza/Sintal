import React from 'react';
import About from '../about/about';
import Contact from '../contact/contact';
import Gallery from '../gallery/gallery';
import './home.css';

function Home() {
    return (
        <div className="home">
            <About/>
            <Gallery/>
            <Contact/>
        </div>
    );
}

export default Home;
