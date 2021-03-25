import React from 'react';
import BpkText from 'bpk-component-text';
import PropTypes from 'prop-types'
import STYLES from './Leg.scss';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

function Leg({ duration_mins, departure_time, departure_airport, airline_id, airline_name, arrival_airport, arrival_time }) {
  const formatTime = (time) => {
    const date = new Date(time)
    return `${date.getHours()}:${date.getMinutes()}`
  }

  const formatMinutes = (mins) => {
    const hours = mins > 60 ? Math.floor(mins / 60) : 0;
    const newMins = mins - (hours * 60);
    return hours > 0 ? `${hours}h ${newMins}` : `${newMins}`
  }

  return (
    <div className={getClassName('Leg')}>
      <img src={`https://logos.skyscnr.com/images/airlines/favicon/${airline_id}.png`}></img>
      <div className={getClassName('Leg__flex')}>
        <span>
          <BpkText className={getClassName('Leg__time')}>{formatTime(departure_time)}</BpkText>
          <BpkText className={getClassName('Leg__airport')}>{departure_airport}</BpkText>
        </span>
        <span className={getClassName('Leg__arrow')}>→</span>
        <span>
          <BpkText className={getClassName('Leg__time')}>{formatTime(arrival_time)}</BpkText>
          <BpkText className={getClassName('Leg__airport')}>{arrival_airport}</BpkText>
        </span>
      </div>
      <span className={getClassName('Leg__end')}>
          <BpkText className={getClassName('Leg__duration')}>{formatMinutes(duration_mins)}</BpkText>
          <BpkText className={getClassName('Leg__stops')}>Direct</BpkText>
        </span>
    </div>
  )
}

Leg.propTypes = {
  id: PropTypes.string,
  duration_mins: PropTypes.number,
  departure_time: PropTypes.string.isRequired,
  departure_airport: PropTypes.string.isRequired,
  airline_id: PropTypes.string,
  airline_name: PropTypes.string,
  arrival_airport: PropTypes.string.isRequired,
  arrival_time: PropTypes.string.isRequired
}

export default Leg;
