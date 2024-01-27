import React, { useEffect } from 'react';
import "./ModelCSS.css"

function ShowModal({ closeModel }) {
    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);
    return (
        <>
            <div className="modal-wrapper" onClick={closeModel}></div>
            <div className="modal-container" >
                <h2>STAY TUNED</h2>
                <p>
                    Subscribe to our newsletter and never miss our designs ,latest news.etc.
                    Our newsletter is sent once a week, every Monday
                </p>
                <button className='model-btn' onClick={closeModel}>Accept It</button>
            </div>

        </>
    )
}

export default ShowModal
