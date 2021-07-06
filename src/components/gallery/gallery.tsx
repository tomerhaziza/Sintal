import React from 'react';
import './gallery.css';

function Gallery() {
    return (
        <div className="gallery">
            <header className='gallery-header'>
                <h1>האוכל שלנו</h1>
                <p>אתם מוזמנים לראות את מגוון המנות שבתפריט</p>
            </header>
                <div className="thumbnails">
                    <div>
                        <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/port-f-img-3.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/port-f-img-2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/port-f-img-1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/port-f-img-4.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/port-f-img-5.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/port-f-img-6.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/port-f-img-7.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/port-f-img-8.jpg" alt="" />
                    </div>
                    <div>
                        <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/port-f-img-9.jpg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Gallery;
