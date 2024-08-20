import React, { useEffect } from 'react';
import './App.css';
import img1 from './img/H2L3ohY.png';
import img2 from './img/IHW1mFB.png';
import img3 from './img/LtUDB9y.png';
import img4 from './img/agN6R4Y.png';

function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-content">
          <h1>Say hello to <br/>ReactJS</h1>
          <p>You will learn Frontend<br/>framework from scratch, to <br/>become a Ninja Developer.</p>
          <button className="btn">Awesome!</button> 
       </div>
      </header>
      <section className="footer">
        <div className="feature">
          <img src={img1} alt="Declarative" />
          <h1>Declarative</h1>
          <p>React makes it <br/> painless to create <br/> interactive UIs.</p>            
        </div>
        <div className="feature">
          <img src={img2} alt="Components" />
          <h1>Components</h1>
          <p>Build encapsulated <br/> components that <br/> manage their state.</p>
        </div>
        <div className="feature">
          <img src={img3} alt="Single-Way" />
          <h1>Single-Way</h1>
          <p>A set of immutable <br/> values is passed to <br/> the component's.</p>
        </div>
        <div className="feature">
          <img src={img4} alt="JSX" />
          <h1>JSX</h1>
          <p>Statically-typed,<br/> designed to run on <br/> modern browsers.</p>
        </div>
      </section>
    </div>             
  );
}


export default App;