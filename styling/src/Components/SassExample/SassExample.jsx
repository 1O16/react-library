import React from "react";
import "./Example.scss";

export default function SassExample() {
  return (
    <div>
      <p>Exmaple</p>
      <p className="font">Example</p>
      <nav>
        <ul>
          <li>123</li>
          <li>
            <a>456</a>
          </li>
        </ul>
      </nav>
      <ul>
        <li>123</li>
        <li>
          <a>456</a>
        </li>
      </ul>
      <p className="base">base</p>
      <p className="inverse">inverse</p>
      <p className="info">info</p>
      <p className="alert">alert</p>
      <p className="success">success</p>
      <p className="message">message</p>
      <p className="shared">shared</p>
      <p className="error">error</p>
      <p className="warning">warning</p>
      <div className="square-av"></div>
      <div className="circle-av"></div>
      <div className="margin">
        <p>Margin</p>
      </div>
      <div className="gray">Gray</div>
      <div className="button">Button</div>
      <div className="pulse">Pulse</div>
    </div>
  );
}
