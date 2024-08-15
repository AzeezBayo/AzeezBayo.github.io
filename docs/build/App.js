import React, { useState, useEffect } from "react";
import { Navigation } from "../src/components/navigation";
import { Header } from "../src/components/header";
import { Features } from "../src/components/features";
import { About } from "../src/components/about";
import { Services } from "../src/components/services";
//import { Team } from "./components/Team";
import { Contact } from "../src/components/contact";
import { Private } from "../src/components/private";
import { Government } from "../src/components/government";
import JsonData from "../src/data/data.json";
import SmoothScroll from "smooth-scroll";
import { useMediaQuery } from 'react-responsive';
import MediaQuery from 'react-responsive';
import styled, { createGlobalStyle } from "styled-components";
import "./App.css";
import axios from 'axios';



export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});



const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

 const [windowDimension, setWindowDimension] = useState(null);

	  useEffect(() => {
		      setWindowDimension(window.innerWidth);
		    }, []);

	  useEffect(() => {
		      function handleResize() {
			            setWindowDimension(window.innerWidth);
			          }

		      window.addEventListener("resize", handleResize);
		      return () => window.removeEventListener("resize", handleResize);
		    }, []);

	  const isMobile = windowDimension <= 640;

  return (
    <Styles.Wrapper>
    <CSSReset />

   

      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <Government data={landingPageData.GovernmentServices} />
      <Services data={landingPageData.Services} />
      <Private data={landingPageData.Private} />
      <Contact data={landingPageData.Contact} />
    </Styles.Wrapper>
  );
};


const Styles = {
	  Wrapper: styled.main`
	     font-family: "Open Sans", sans-serif;
	     text-rendering: optimizeLegibility !important;
	     -webkit-font-smoothing: antialiased !important;
	     color: #777;
	     font-weight: 400;
	     width: 100% !important;
	     height: 100% !important;
       viewport-height: 100%;
       viewport-width: 100%;
	  `,
};

const CSSReset = createGlobalStyle`
   *,
   *::before, 
   *::after {
   margin: 0; 
   padding: 0;
   box-sizing: inherit;
   }

   html {
   font-size: 62.5%; /*1rem = 10px*/
   box-sizing: border-box;    
	   }  

    body {
    font-size: 1.4rem;
    font-family: sans-serif;  
    }
	  `;
export default App;
