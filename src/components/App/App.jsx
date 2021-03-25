import React, { useEffect, useState } from 'react';
import BpkText from 'bpk-component-text';

import Header from '../Header';

import STYLES from './App.scss';
import Itinerary from '../Itinerary/Itinerary';

const getClassName = (className) => STYLES[className] || 'UNKNOWN';

function App() {
  const [flightData, setFlightData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('./flights.json');
      const json = await res.json();
      setFlightData(json);
    }
    fetchData();
  }, [])

  return (
    <div className={getClassName('App')}>
      <Header />
      <main className={getClassName('App__main')}>
        {flightData && flightData.itineraries.map((data, index) =>
          <Itinerary key={index} id={data.id} legs={data.legs.map((data, index) => flightData.legs.find(item => item.id === data))} price={data.price} agent={data.agent} agentRating={data.agent_rating} />
        )}
      </main>
    </div>
  );
}

export default App;
