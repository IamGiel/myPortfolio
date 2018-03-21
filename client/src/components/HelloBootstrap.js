import React from "react";
import { Icon } from 'react-fa'
import "../styles/HelloBootstrap.css";
import { TweenMax } from "gsap";
const _ = " ";


const name = "Gel";
TweenMax.to(name, 6, {
  backgroundColor: "yellow"
})

const HelloBootstrap = () => (
  <div>
    <div className="main-container">
      <div className="jumbotron">
        <h1>
          <Icon spin name="spinner" />Hello, My name is {name}!
        </h1>
        <p>I love it when it rains...</p>
        <p>
          <a
            href="https://www.linkedin.com/in/gel-d-b8314556/"
            className="btn btn-primary btn-lg"
          >
            <Icon name="linkedin" />
            {_}Linkdin
          </a>
          <a
            href="https://github.com/IamGiel"
            className="btn btn-primary btn-lg"
          >
            <Icon name="github" />
            {_}Github
          </a>
          <a
            href="https://geltwo.herokuapp.com/"
            className="btn btn-primary btn-lg"
          >
            Explore.Me
          </a>

          <a
            href="https://stackoverflow.com/users/8400475/gel-sisaed"
            className="btn btn-primary btn-lg"
          >
            <Icon name="stack-overflow" />
            {_}Stack-Overflow
          </a>
        </p>
      </div>
    </div>
  </div>
);
export default HelloBootstrap;
