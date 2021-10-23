import React from "react";
import styled from "styled-components";
import Moment from "react-moment";
import ReactAnimatedWeather from 'react-animated-weather';
import "./weathers.css";

const Wrapper = styled.div`
  width: 100px;
  .cloud-img {
    height: 2rem;
  }

  .weather-card {
    &__day {
      color: #5b72a9;
    }

    &__tempt {
      display: block;
      font-size: 1rem;
      color: #6790de;
    }

    &__weather {
      display: block;
      font-size: 0.5rem;
      color: #677db1;
    }

    &__max-tempt {
      color: white;
      margin-right: 0.25rem;
    }

    &__min-tempt {
      color: white;
    }
  }
`;

const defaults = {
    icon: 'CLEAR_DAY',
    color: 'goldenrod',
    size: 40,
    animate: true
  };

const WeatherCard = (props) => {
  return (
    <Wrapper className="weather-card">
      <Moment format="LT" className="weather-card__day">
      </Moment>
      <div className="weather-card__image">
      <ReactAnimatedWeather
        icon= {props.icon}
        color={defaults.color}
        size={defaults.size}
        animate={defaults.animate}
      />
      </div>
      <span className="weather-card__tempt">{props.temp}°</span>
      <span className="weather-card__weather"><h2>{props.weath}</h2></span>
      <span className="weather-card__max-tempt">{props.max}°</span>
      <span className="weather-card__min-tempt">{props.min}°</span>
    </Wrapper>
  );
};

export default WeatherCard;
