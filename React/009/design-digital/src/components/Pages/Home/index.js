import React from 'react';
import './style.css';

import Header from '../../Header';
import Banner from '../../Banner';
import WorkExperiences from '../../WorkExperiences';
import Footer from '../../Footer';


export default function Home (){
  return (
    <section className="home">
      <Header />
      <Banner />
      <WorkExperiences />
      <Footer />
    </section>
  );
};
