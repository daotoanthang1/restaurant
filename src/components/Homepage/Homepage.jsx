import Footer from "../../container/Footer/Footer"
import React, { Fragment } from 'react';
import { Navbar } from '..';
import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu } from "../../container";
export const Homepage = () => {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Chef />
      <Intro />
      <Laurels />
      <Gallery />
      <FindUs />
      <Footer />
    </Fragment>
  )
}
