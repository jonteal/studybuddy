import reducer from './reducer';

// Creates a custom store to manage the state of the application
function createStore(reducer) {

    // initialize the state variable
    let state;

    // initialize the listeners array to push UI components that will
    // subscribe to the store in order to listen for state changes
    let listeners = [];

    // Subscribe function that takes a listener as an argument and
    // adds them to the listeners array
    function subscribe(listener) {
        listeners.push(listener);
    }

    // Dispatch function which takes an action argument and uses a 
    // reducer (which takes the state of the app and and action) to
    // let all the listeners know what is taking place in the app
    function dispatch(action) {
        state = reducer(state, action);

        // This is what tells all the listeners what's happening
        for (let i = 0; i < listeners.length; i++) 
            listeners[i]();
    }

    // Function to get the state of the application and return it
    function getState() {
        return state;
    }

    // Returns all the functions in order to export them down below
    return {
        subscribe,
        dispatch,
        getState
    }
}

export default createStore(reducer);