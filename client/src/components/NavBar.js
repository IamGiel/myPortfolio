import React from "react";
import "../styles/NavBar.css";

const drops = Math.floor(Math.random() * (1000 + 500)) + 1;
const rainDrops = []; // <-- let's rename this
for (let i = 0; i < drops; i++) {
  let left = Math.floor(Math.random() * (16000 - 0 + 1)) + 1; // Subtract zero?
  let top = Math.floor(Math.random() * (-1000 - 1400 + 1)) + 1;
  rainDrops.push({ left, top }); // <-- Collect every drop
}
console.log(rainDrops);

const NavBar = () => (
  <div>
    <section className="rain">

      {rainDrops.map(({ left, top }, index) =>
        <div
          className="drop"
          id={'drop' + index}
          style={{ left: left + 'px', top: top + 'px', }}
        />
      )}

    </section>
  </div>
);
export default NavBar;