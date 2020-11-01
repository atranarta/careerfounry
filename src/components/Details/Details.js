import studentImg from '../../images/Abhi-1279-min.png';

import './details.scss';

const Details = () => {
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