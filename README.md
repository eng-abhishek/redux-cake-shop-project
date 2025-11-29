# Here We create cake shop small project 
## In first Step we create project without using redux-hook Like useSelector, useDispatch

## In Second step we create project with redux-hook Like useSelector, useDispatch


## Step 1


## Step 2


## Redux Provider 


### Hindi Content 

🔥 React-Redux Provider क्या है?

Provider एक React component है जो पूरे React application को Redux store से connect करता है।

👉 अगर आप Provider नहीं लगाओगे
तो React components को store, useSelector, useDispatch कुछ भी access नहीं मिलेगा।

📌 Provider कहाँ आता है?

यह सबसे ऊपर (root file) में App component को wrap करता है:

index.js / main.jsx

✅ Example (Best & Simple)
📁 index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <App />
    </Provider>
);

💡 Provider का काम क्या है?
✔ 1. पूरे React App में Redux store available कराता है

अब कोई भी component store को access कर सकता है:

const value = useSelector(state => state.cake.numOfCakes);
const dispatch = useDispatch();

✔ 2. Redux को React component tree से connect करता है

Redux को पता रहता है कि कौन सा component state use कर रहा है → changes होने पर वही re-render होता है।

📦 Real Flow समझें (Simple)
Step 1: Store बनाओ
import { createStore } from 'redux';
import cakeReducer from './cake/cakeReducer';

const store = createStore(cakeReducer);
export default store;

Step 2: Provider से App को wrap करो
<Provider store={store}>
    <App />
</Provider>

Step 3: Component में Redux state लो
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';

function CakeContainer() {
    const numOfCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();

    return (
        <>
            <h2>Cakes: {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>
                Buy Cake
            </button>
        </>
    );
}

📌 Without Provider क्या होगा?

❌ useSelector काम नहीं करेगा
❌ useDispatch काम नहीं करेगा
❌ Components store नहीं पढ़ पाएंगे
❌ पूरे Redux का पूरा flow टूट जाएगा


### English Content

🔥 What is React-Redux Provider?

Provider is a special component that connects your whole React app to the Redux store.

It makes sure that every component inside your app can use:

✔ useSelector() → to read data from store
✔ useDispatch() → to send actions to store

Without Provider → Redux will NOT work.

📌 Where do we use Provider?

In the index.js (or main.jsx) file, you wrap your <App /> component inside <Provider>.

Example:

import { Provider } from 'react-redux';
import store from './redux/store';

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

📦 What does Provider do?
⭐ 1. Gives access to the Redux store

All components can read and update the store.

⭐ 2. Makes React & Redux work together

It connects your component tree with Redux.

🧠 Easy Example to understand

Imagine Redux store is like a water tank.

Provider is like a main pipeline.

All components in your app are like taps.

If there is no pipeline, taps cannot get water.

Similarly:

Redux store = water tank

Provider = pipeline

Component = tap

useSelector/useDispatch = how tap uses water

🧪 Small Code Example
Component reading data:
const cakes = useSelector(state => state.numOfCakes);

Component updating data:
dispatch(buyCake());


👉 These only work because Provider is wrapped around the app.

✅ Without Provider?

❌ Components cannot access store
❌ useSelector will give error
❌ useDispatch will give error
❌ Redux will not work


# React Redux with Hooks

React Redux gives special hooks to connect your React components with the Redux store without using connect().

The two most important hooks are:

1️⃣ useSelector()

Used to read data from the Redux store.

Think of it as taking values from the store.

Example:

const numOfCakes = useSelector(state => state.cake.numOfCakes)

2️⃣ useDispatch()

Used to send actions to Redux.

Think of it as triggering changes in the store.

Example:

const dispatch = useDispatch()

dispatch(buyCake())

🎂 Example: Cake Shop with React Redux Hooks
Step 1: Action
// cakeActions.js
export const BUY_CAKE = "BUY_CAKE";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

Step 2: Reducer
// cakeReducer.js
import { BUY_CAKE } from "./cakeActions";

const initialState = {
  numOfCakes: 10
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

export default cakeReducer;

Step 3: Store
// store.js
import { createStore } from "redux";
import cakeReducer from "./cake/cakeReducer";

const store = createStore(cakeReducer);

export default store;

Step 4: Wrap App with Provider
// index.js
import { Provider } from "react-redux";
import store from "./redux/store";

<Provider store={store}>
  <App />
</Provider>

Step 5: Use hooks in Component
// CakeContainer.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function CakeContainer() {
  const numOfCakes = useSelector(state => state.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Cakes: {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
    </div>
  );
}

export default CakeContainer;

🧠 How Hooks Make Redux Easy?
Without Hooks	With Hooks
Need connect()	No connect()
Must write mapStateToProps	No mapping functions
Must write mapDispatchToProps	Use dispatch directly
More code	Less code
⭐ Summary (1 Minute Revision)

useSelector → Read data from Redux store.

useDispatch → Send actions to Redux store.

No need for connect().

Use Redux logic in function components easily.