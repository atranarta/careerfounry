import React, { useEffect } from 'react';

import studentImg from '../../images/Abhi-1279-min.png';

import './details.scss';

const Details = () => {

  useEffect(() => {
    async function getDetails() {
      const courseDetail = await fetch(`https://private-e05942-courses22.apiary-mock.com/courses/full-stack-immersion`);
      const data = await courseDetail.json();
      console.log(data);
    }
    getDetails();
  }, []);


  return (
    <div className="details">
      <div className="description">
        <h1>The voice user interface design course with Amazon Alexa</h1>
        <div className="start-dates">Next dates:
          <ul>
            <li>2020-08-17</li>
            <li>2020-09-17</li>
            <li>2020-10-17</li>
          </ul>
        </div>
        <div className="price-container">Price:
          <p className="price">1800 eur</p>
        </div>
      </div>
      <img className="student" alt="student" src={studentImg} />
    </div>
  )
};


export default Details;