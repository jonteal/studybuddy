// Thunk - comes with Redux toolkit

const func = ({ dispatch, getState }) => next => action => {

    // IF the type of action is a function, call the function 
    if (typeof action === 'function') 
        action(dispatch, getState)

    // IF it's a plain object, pass it to the next middleware function or reducer
    else    
        next(action);
}

export default func;