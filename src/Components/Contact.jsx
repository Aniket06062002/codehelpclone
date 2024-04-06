import React from 'react'
import Contactbg from './Imgs/interface bg.png'
// import './Styles/Contact.css';

const Contact = () => {
    return (
        <>
            <div className="Backgroundimg" id='Backgroundimg'>
                <img src={Contactbg} alt="" style={{
                    width: '103.59%',
                    height: '25rem',
                    marginTop: '3rem',
                    marginLeft: '-3rem',
                    // filter: 'blur(1px)'
                    opacity: '0.8',
                    zIndex: '-1'
                    
                    
                }} />
                <h2 style={{marginTop:'-15rem',
            marginLeft: '10rem'}}>
                    Get In Touch
                </h2>
                <h4 style={{marginTop:'1rem',
            marginLeft: '10rem',
            marginBottom: '10rem'}}>The Ultimate Guide To Ace SDE Interviews.</h4>
            </div>

        </>
    )
}

export default Contact