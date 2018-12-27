import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  winter: {
    text: "Blurr! it's chilly.",
    iconName: "snowflake"
  },
  summer: {
    text: "It's Summer",
    iconName: "sun"
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer': 'winter';
  } else {
    return lat > 0 ? 'winter': 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  //Destructuring syntax ES2015
  const { text, iconName } = seasonConfig[season];

  return (

    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}/>
      <h1>{ text }</h1>
      <i className={`icon-right massive ${iconName} icon`}/>
    </div>
  )
}

export default SeasonDisplay;
