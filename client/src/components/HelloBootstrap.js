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
        <p>This is my React Fueled Website</p>
        <p>
          <a className="btn btn-primary btn-lg">
            <Icon name="linkedin" />
            {_}Linkdin
          </a>
          <a className="btn btn-primary btn-lg">
            <Icon name="github" />
            {_}Github
          </a>
          <a className="btn btn-primary btn-lg">About.Me</a>
          <a className="btn btn-primary btn-lg">
            <Icon name="stack-overflow" />
            {_}Stack-Overflow
          </a>
        </p>
      </div>
    </div>
  </div>
);
export default HelloBootstrap;
