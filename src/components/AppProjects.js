//App projects component

import React, { useState} from "react";

//every card details come from a const inside "ProjectsCarDetails.js"
import { ProjectsCardDetails } from "./ProjectsCarDetails";

//swip library
import {useSwipeable} from "react-swipeable";

//icons from font awsome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import GitIcon from "./gitIcon";



export default function MainAbout() {

  //when user choose right or left arrow 
  const [activeIndex, setActiveIndex] = useState(0);


  const toTheLeft = () => {

    if (activeIndex === ProjectsCardDetails.length -1){

        setActiveIndex(prevActiveIndex => 0);
      
    }else{

        setActiveIndex(prevActiveIndex => prevActiveIndex + 1);

    }

  };

  const toTheRight = () => {

    if (activeIndex === 0){

        setActiveIndex(prevActiveIndex => ProjectsCardDetails.length -1);
      
    }else{

        setActiveIndex(prevActiveIndex => prevActiveIndex - 1);

    }

  };

    //when swip 
    const handlers = useSwipeable({
        onSwipedRight: () => toTheLeft(),
        onSwipedLeft: () => toTheRight()
    })

    return (
      <div className="main" {...handlers}>
          
        <div className="projects-container fade-in">

          {/* left arrow */}
          <FontAwesomeIcon icon={faChevronLeft}  onClick={toTheLeft} size="2x" />

          {/* every card has: */}
          <div className="card-container">

            {/* 1.image */}
            <a href={ProjectsCardDetails[activeIndex][2]}>
              <div

                style={{
                  backgroundImage: `url(${ProjectsCardDetails[activeIndex][0]})`,
                }}
                className="card-image"
                
              >
              </div>
            </a>


            <div className="card-details">
              
              {/* 2.title */}
              <h2 id="title">
                {ProjectsCardDetails[activeIndex][1]}
              </h2>

              <h4>Made with:</h4>

              {/* 3.list of the things i used to make that App */}
              <ul className="madeWith-items-container">
                {ProjectsCardDetails[activeIndex][4].map(function (item, index) {
                  return <li key={index}>{item}</li>;
                })}
              </ul>

              {/* 4. gitIcon linked to that repository */}
              <GitIcon url={ProjectsCardDetails[activeIndex][3]} />

            </div>

          </div>
           
            {/* right arrow */}
            <FontAwesomeIcon icon={faChevronRight}  onClick={toTheRight} size="2x" />


        </div>
      </div>
    );
}
