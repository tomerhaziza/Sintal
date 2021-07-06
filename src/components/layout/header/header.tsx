import React from 'react';
import Scrolldown from '../../scroll-down/scroll-down';
import './header.css';
import { Link } from 'react-scroll'
import Navbar from '../../navbar/navbar';


function Header() {
    return (
        <div className="header">
            <nav >
                <Navbar/>
            </nav>
            <div className="bg-image"></div>
            <div className="text-container">
                <div className="header-text">
                    <h1>שף פרטי לארוחה בשרית בלתי נשכחת</h1>
                    <h2>ארוחת בשרים מלכותית לכל אירוע, ערב מלא בחוויות, בשר איכותי ומתכונים מיוחדים.</h2>
                    <p className="phone-number-container">להזמנות חייגו</p>
                    <div className='phone-number'>
                        <a href='tel:0547715657'>054-771-5657</a>
                    </div>
                </div>

                <div className="scroll-down">
                    <Link to="about" spy={true} smooth={true}>
                        <Scrolldown />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
