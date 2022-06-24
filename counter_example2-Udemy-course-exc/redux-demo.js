// import redux from 'redux';
const redux = require('redux');
preloadedState = { counter: 10 };

const counterReducer = (state = { counter: 0 }, action) => {
    //console.log("inside counterReducer" ,state);

   /*return {
        counter: state.counter + 1
    }; */

     switch (action.type) {
         case 'INCREMENT':
             //console.log("INCREMENTING");
             //counter =  state
             //  console.log(state);
             return { counter: state.counter + 1 };;
         case 'DECREMENT':
            //  console.log("DECREMENTING");
             return { counter: state.counter - 1 };
         default:
            //  console.log("DEFALUT");
             return state;  // !!! not return state.counter, it getting things messy
     }

}


const store = redux.createStore(counterReducer);
// const store = redux.createStore(counterReducer,preloadedState); // !!! preloadedState is overwriting the default state

// console.log(store.getState());

// const counterSubscriber = () => {
//     // console.log(store.getState());
// };

// store.subscribe(counterSubscriber);

store.dispatch({ type: 'INCREMENT' });

store.dispatch({ type: 'INCREMENT' });


store.dispatch({ type: 'DECREMENT' });

console.log(store.getState());