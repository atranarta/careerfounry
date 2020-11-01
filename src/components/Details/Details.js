import React, { useState, useEffect } from 'react';

import studentImg from '../../images/Abhi-1279-min.png';

import './details.scss';

const Details = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getDetails() {
      setIsLoading(true);
      const courseDetail = await fetch(`https://private-e05942-courses22.apiary-mock.com/courses/full-stack-immersion`);
      const data = await courseDetail.json();
      setDetails([data]);
      setIsLoading(false);
    }
    getDetails();
  }, []);

  if (isLoading) { 
    return (
      <div className="preloader">Data loading...</div>
    );
  }

  return (
    <div className="details">
      <div className="description">
        <h1>{details[0].description}</h1>
        <div className="start-dates">Next dates:
          <ul>
            {details[0].start_dates.map((date) => <li>{date}</li>)}
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