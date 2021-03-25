import React from 'react';
import BpkText from 'bpk-component-text';
import PropTypes from 'prop-types'
import Leg from '../Leg/Leg';
import STYLES from './Itinerary.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

function Itinerary({ legs, price, agent, agent_rating }) {
  return (
    <div className={getClassName('Itinerary')}>
      {legs.map((data, index) => <Leg key={index} id={data.id} airline_id={data.airline_id} airline_name={data.airline_name}
      arrival_airport={data.arrival_airport} arrival_time={data.arrival_time} departure_airport={data.departure_airport}
      departure_time={data.departure_time} duration_mins={data.duration_mins} />)}
      <div className={getClassName('Itinerary__flex')}>
        <span>
          <BpkText className={getClassName('Itinerary__price')}>{price}</BpkText>
          <BpkText className={getClassName('Itinerary__agent')}>{agent}</BpkText>
        </span>
        <button type="button" className={getClassName('Itinerary__button')}>Select</button>
      </div>
    </div>
  )
}

Itinerary.propTypes = {
  id: PropTypes.string.isRequired,
  legs: PropTypes.array.isRequired,
  price: PropTypes.string.isRequired,
  agent: PropTypes.string,
  agent_rating: PropTypes.string
}

export default Itinerary;
