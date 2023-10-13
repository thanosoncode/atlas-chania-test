import React from 'react';
import Hero from './hero/Hero';
import AboutUs from './aboutUs/AboutUs';
import FollowUsOnInstagram from './followUsOnInstagram/FollowUsOnInstagram';
import Newsletter from './newsletter/Newsletter';
import Posts from './posts/Posts';
import Questions from './questions/Questions';
import Sports from './sports/Sports';
import Trainers from './trainers/Trainers';

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Sports />
      <Trainers />
      <Posts />
      <Newsletter />
      <Questions />
      <FollowUsOnInstagram />
    </>
  );
};

export default Home;
