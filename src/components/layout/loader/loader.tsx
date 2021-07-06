import React from 'react';
import './loader.css';

function Loader() {
    return (
        <div className="loader">
            <div className="lds-ellipsis">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loader;
