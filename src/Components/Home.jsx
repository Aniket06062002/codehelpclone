import React from 'react'
import bannerimg from './Imgs/back_img.svg';
import Coding from './Imgs/coding.svg';
// import background12 from './Imgs/background12.svg';
import lovebhaiya from './Imgs/lovebhaiya.webp';
import amazonlove from './Imgs/amazonlove.png';
import microsoft from './Imgs/microsoft_logo_.png';
import pngegg from './Imgs/pngegg_1_1_51b5432954.png';
import Thumbnail from './Imgs/Thumbnail.jpg';
import Screenshot from './Imgs/Screenshot 2023-08-03 202936.png';
import Youtube from './Imgs/Youtube_Oct_Denoiser_.webp';
import Linkdin from './Imgs/Linked_In_Oct_Denoiser_.webp';
import Telegram from './Imgs/Telegram_Oct_Denoiser_.webp';
import Discord from './Imgs/Discord_Oct_Denoiser_Beauty_.webp';


// import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Middle menu */}
      <div ClassName="colorbackground" id='colorbackground'></div>

      <div ClassName="flextext" id='flextext'>
        <h1>Learn With Love</h1>
        <h3>The Ultimate Guide To Ace SDE Interviews.</h3>
        <br />
        <button>View Course</button>
        <button>Watch Video</button>
      </div>

      <div ClassName="bgimg" id='bgimg'>
        <img src={bannerimg} alt="" srcset="" />
      </div>

      <div ClassName="socialmedia" id='socialmedia'>
        <div ClassName="youtube" id='youtube'>
          <h1>900K+</h1>
          <h5>Subcriber on Youtube </h5>
        </div>

        <div ClassName="twitter" id='twitter'>
          <h1>4K+</h1>
          <h5>Followers on Twitter </h5>
        </div>

        <div ClassName="instagram" id='instagram'>
          <h1>100K+</h1>
          <h5>Followers on Instagram </h5>
        </div>

        <div ClassName="linkdin" id='linkdin'>
          <h1>410K+</h1>
          <h5>Followers on linkedin</h5>
        </div>
      </div>

      <div ClassName="median" id='median'>
        <div ClassName="mediantext" id='mediantext'>
          <h4>WHY CODE-HELP?</h4>
          <h1>Making learning easier and more convenient for you.</h1>
        </div>
      </div>

      {/* card grid  */}

      <div ClassName="card-container" id="card-container">
        <div ClassName="card" id='card'>
          <div ClassName="card-content" id='card-content'>
            <img src={Coding} alt="" srcset="" style={{ height: "5rem", width: "5rem", padding: "1rem" }} />
            <h3>Data Structure</h3>
            <p>Data structures are the problem-solving pillars of coding. Learn all the foundational knowledge about all
              of the popular data structure that you need, to be well-versed in interviews.</p>
          </div>
        </div>
        <div ClassName="card" id='card'>
          <div ClassName="card-content" id='card-content'>
            <img src={Coding} alt="" srcset="" style={{ height: "5rem", width: "5rem", padding: "1rem" }} />
            <h3>Placement Preparation</h3>
            <p>Ace the placement interviews by being knowledgeable in all well-known data structures, popular
              problem-solving methods, and core computer sciences.</p>
          </div>
        </div>
        <div ClassName="card" id='card'>
          <div ClassName="card-content" id='card-content'>
            <img src={Coding} alt="" srcset="" style={{ height: "5rem", width: "5rem", padding: "1rem" }} />
            <h3>Hand Picked Question</h3>
            <p>Get access to hand-picked coding interview questions across categories & difficulty levels that will
              prepare you for every interview you would encounter.</p>
          </div>
        </div>
        <div ClassName="card" id='card'>
          <div ClassName="card-content" id='card-content'>
            <img src={Coding} alt="" srcset="" style={{ height: "5rem", width: "5rem", padding: "1rem" }} />
            <h3>Curated Content</h3>
            <p>Learn in-depth conceptual overviews, how to approach an algorithm, how to implement it & how to optimize
              it.</p>
          </div>
        </div>
        <div ClassName="card" id='card'>
          <div ClassName="card-content" id='card-content'>
            <img src={Coding} alt="" srcset="" style={{ height: "5rem", width: "5rem", padding: "1rem" }} />
            <h3>Learn from the best</h3>
            <p>Get access to lectures and get mentored by one of the best in the market, Love Babbar.</p>
          </div>
        </div>
        <div ClassName="card" id='card'>
          <div ClassName="card-content" id='card-content'>
            <img src={Coding} alt="" srcset="" style={{ height: "5rem", width: "5rem", padding: "1rem" }} />
            <h3>Learn Something new</h3>
            <p>Learn new concepts daily, increase your productivity & reach your full potential.</p>
          </div>
        </div>
      </div>

      {/* <!-- about sections --> */}
      <div ClassName="about" id='about'>
        {/* <div ClassName="bgimg" id ='bgimg'>
          <img src= {background12} alt="" />
        </div> */}
        <div ClassName="row_about" id='row_about'>
          <h1>Meet your Instructor</h1>
          <button>Know More</button>
        </div>
        <hr />
        <div ClassName="mid" id='mid'>
          <img src={lovebhaiya} alt="" />
          <h2>Love Babber</h2>
          <h2>Founder, CodeHelp</h2>
        </div>
        <div ClassName="jobs" id='jobs'>
          <img src={amazonlove} alt="" />
          <img src={microsoft} alt="" />
          <img src={pngegg} alt="" />
        </div>
        <div ClassName="jobstext" id='jobstext'>
          <h1>Ex-Amazon, SWE</h1>
          <h1>Ex-Microsoft, SWE</h1>
          <h1>Google ASC, India</h1>
        </div>
      </div>

      {/* <!-- placement section --> */}
      <hr />
      <div ClassName="placement" id='placement'>
        <div ClassName="platext" id='platext'>
          <h2>PLACEMENTS</h2>
          <h1>Get Offers from
            Top Companies</h1>
          <p>Our finest get offers from top-notch companies.</p>

        </div>
        <div ClassName="plaimg" id='plaimg'>
          <img src={Screenshot} alt="" />
        </div>
      </div>

      <div ClassName="ytthubnail" id='ytthubnail'>
        <h1>What would you like to learn?</h1>
        <div ClassName="cardyt" id='cardyt'>
          <img src={Thumbnail} alt="" />
          <h4>Data Structures & Algorithms BootCamp @Supreme-2.0</h4>
          <h5>₹3600</h5>
        </div>
        <hr />
        <h1>Recorded Courses</h1>


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

      {/* <!-- Join our Coding family --> */}
      <div ClassName="joincomm" id='joincomm'>
        <h1>Join our Coding family</h1>
        <h5>If you would like to keep up on the latest posts and courses,
          come by and connect with us on the following links.</h5>

        <div ClassName="socalimg" id='socaling'>
          <img src={Youtube} alt="" />
          <img src={Linkdin} alt="" />
          <img src={Discord} alt="" />
          <img src={Telegram} alt="" />

          {/* <ul>
            <li>Youtube</li>
            <li>Linkedin</li>
            <li>Discord</li>
            <li>Telegram</li>
          </ul> */}

        </div>
      </div>




    </>
  )
}

export default Home;