import React from 'react';
import './footer.css';
import { Link } from 'react-scroll'

function Footer() {
    return (
        <div className="footer">
            <p className='hashtag'>
                #ChefTalSasson
            </p>
            <p className='contant-info'>
                נייד: 054-771-5657 | אימייל: sassoontal@gmail.com
            </p>
            <p className='back-to-top'>
                <Link to="header" spy={true} smooth={true}>
                    חזרה למעלה
                </Link>
            </p>
            <div className='bottom-footer'>
                <p>
                    © 2021 Sintal by Tal Sasson. Created by Tomer Haziza
                </p>
            </div>
        </div>
    );
}

export default Footer;
