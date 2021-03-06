import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import studentImg from '../../images/Abhi-1279-min.png';

import { getUserPosition } from '../getUserPosition';

import './details.scss';
const Details = () => {
  const [details, setDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState('EUR');

  let { slug } = useParams();

  useEffect(() => {
    async function getDetails() {
      setIsLoading(true);
      const courseDetail = await fetch(`https://private-e05942-courses22.apiary-mock.com/courses/${slug}`);
      const data = await courseDetail.json();
      setDetails([data]);
      setIsLoading(false);
    }
    getDetails();

    getUserPosition().then((result) => {
      setCurrency(result === 'EU' ? 'EUR' : 'USD');
    });

  }, [slug]);

  if (isLoading) { 
    return (
      <div className="preloader">Data loading...</div>
    );
  }

  const showPrice = (currency) => {
    const price = Object.values(details[0].prices).filter((item) => item.currency === currency.toLowerCase())[0];
  
    return (
      <p className="price">{price.amount} {currency}</p>
    )
  };


  return (
    <div className="details">
      <div className="description">
        <h1>{details[0].description}</h1>
        <div className="start-dates">Next dates:
          <ul>
            {details[0].start_dates.map((date) =><li key={date}>{date}</li>)}
          </ul>
        </div>
        <div className="price-container">Price:
          {showPrice(currency)}
        </div>
      </div>
      <img className="student" alt="student" src={studentImg} />
    </div>
  )
};


export default Details;