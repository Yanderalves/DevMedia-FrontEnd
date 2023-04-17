import React, { useState } from 'react';
import './style.css';

import Header from '../../Header';
import Banner from '../../Banner';
import WorkExperiences from '../../WorkExperiences';
import Footer from '../../Footer';


export default function Home() {

  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => setDarkTheme(darkTheme ? false : true)

  return (
    <section className="home">
      <Header changeTheme={changeTheme} darkTheme={darkTheme} />
      <Banner darkTheme={darkTheme} />
      <WorkExperiences darkTheme={darkTheme} />
      <Footer darkTheme={darkTheme} />
    </section>
  );
};
