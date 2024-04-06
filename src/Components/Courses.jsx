import React from 'react'
import Thumbnail from './Imgs/Thumbnail.jpg';
import '../Styles/Courses.css'


const Courses = () => {
    return (
        <>
            <div ClassName="ytthubnail" id='ytthubnail'>
                <div ClassName="cardyt" id='cardyt'>
                    <img src={Thumbnail} alt="" />
                    <h4>Data Structures & Algorithms BootCamp @Supreme-2.0</h4>
                    <h5>₹3600</h5>
                </div>
                <hr />
                <br />
            </div>
            <div ClassName="ytthubnail1" id='ytthubnail1'>
                <div ClassName="cardyt1" id='cardyt1'>
                    <img src={Thumbnail} alt="" />
                    <h4>Web Development Master Course @dot Batch</h4>
                    <h5>₹3600</h5>
                </div>
                <div ClassName="cardyt1" id='cardyt1'>
                    <img src={Thumbnail} alt="" />
                    <h4>Data Structures & Algorithms BootCamp @Supreme-2.0</h4>
                    <h5>₹3600</h5>
                </div>
            </div>


        </>
    )
}

export default Courses