import React from 'react';
import foods from './foods';
import {choice, remove} from './helpers';


// import { add, multiply } from './helpers';
// import data, { meow } from './cats'

function App() {
    console.log(`Fruits left: ${foods.length}.`)
    const chosenFood = remove(foods,choice(foods));
    console.log(`I'd like one ${chosenFood}. please`)
    console.log(`Here You go ${chosenFood}.`)
    console.log(`Fruits left: ${foods.length}.`)
  return (
    <div>
        <h1>hello</h1>
      {/* <Alert variant="success">
        <h1>Welcome Back!</h1>
        <Greeting />
      </Alert>
      <Alert variant="danger">
        <h1>OH NO!</h1>
      </Alert>
      <img src={fakeLogo} id="logo" alt="logo" />
      <ShoppingCart items={items} username="Carly" />
      <ShoppingCart items={moreItems} username="Rusty" /> */}
    </div>
  );
}

export default App;
