import axios from 'axios';
import * as actions from '../api';





const api = ({ dispatch }) => next => async action => {
    if (action.type !== actions.apiCallBegan.type) 
        return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    if (onStart) 
        dispatch({ type: onStart });

    next(action);

    try {
        const response = await axios.request({
            baseURL: 'http://localhost:3000/api',
            url, // /subjects
            method,
            data
        });

        // GENERAL
        dispatch(actions.apiCallSuccess(response.data));

        // SPECIFIC
        if (onSuccess) 
            dispatch({ type: onSuccess, payload: response.data })
    
    } catch (error) {

        // GENERAL 
        dispatch(actions.apiCallFailed(error.message));

        // SPECIFIC
        if (onError)
            dispatch({ type: onError, payload: error.message });
    }   
    
    
}


export default api;