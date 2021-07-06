import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        // Detect scroll event to apply sticky class on navbar
        window.addEventListener('scroll', handleScroll);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll); // Remove sticky class when user at top
        }
    });


    const handleScroll = () => {
        if (!window.scrollY && scrolling) { // When user at top of page
            setScrolling(false);
        }
        else if (window.scrollY && !scrolling) {
            setScrolling(true);
        }
    }

    return (
        <div className={scrolling ? 'navbar sticky' : 'navbar'} onBlur={ () => setIsMenuOpen(false) }>
            <ul className={isMenuOpen ? 'burger' : 'default'} >
                <li>
                    <Link activeClass="active" to="header" spy={true} smooth={true}>
                        עמוד הבית
                    </Link>
                </li>
                <li>
                    <Link to="about" spy={true} smooth={true}>
                        קצת עלינו
                    </Link>
                </li>
                <li>
                    <Link to="gallery" spy={true} smooth={true}>
                        האוכל שלנו
                    </Link>
                </li>

                <li>
                    <Link to="contact" spy={true} smooth={true}>
                        הזמינו עכשיו
                    </Link>
                </li>
            </ul>

            <button className={isMenuOpen ? 'open-burger open' : 'open-burger'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="logo">
                <h1>sintal</h1>
            </div>
        </div>
    );
}

export default Navbar;
