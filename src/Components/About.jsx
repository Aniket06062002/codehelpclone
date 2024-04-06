import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../Styles/About.css'; 
import img1 from './lakshya.png'
import img2 from './love.png'

const Slide = ({ image, info }) => (
  <div className="slide">
    <div className="image-container">
      <img src={image} alt="slide" />
    </div>
    <div className="info-container">
      {info}
    </div>
  </div>
);

const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <Slide
          image={img1}
          info=" and a Youtuber, primarily known for his Coding and Software Engineering skills. He is quite a popular figure among students as well as working professionals on various social media platforms, his YouTube and LinkedIn profiles amassing almost "
        />
        <Slide
          image={img2}
          info=" and a Youtuber, primarily known for his Coding and Software Engineering skills. He is quite a popular figure among students as well as working professionals on various social media platforms, his YouTube and LinkedIn profiles amassing almost "
        />
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default About;
