import React from 'react';
import logo from './logo.svg';
import './App.css';
import ListAndKeysComponent from './components/list-and-keys-component';

function App() {
  return (
    <div className="App">

      <h2>Lists and Keys</h2>

      <p>When creating fully feature front-end applications you often need to create an HTML element for each element of an array/list/etc. For example, you may need to create an
        image element for each cartoon in an array of cartoon image URLs.</p>
      <p>In this lab, let's explore how to render lists in React. </p>


      <div className="section-container">

          <ListAndKeysComponent></ListAndKeysComponent>

      </div>

      <div>
        <a href="https://react.dev/learn/rendering-lists">https://react.dev/learn/rendering-lists</a>
      </div>

      {/*OPTIONAL PRACTICE: If you want more practice later, try rendering lists of components, as opposed to lists of standard HTML elements.*/}
    </div>
  );
}

export default App;
