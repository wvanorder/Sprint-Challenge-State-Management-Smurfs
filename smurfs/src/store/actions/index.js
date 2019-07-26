import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const fetchSmurfs = () => dispatch => {
    dispatch({ type: FETCH_SMURFS_START });

    axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            console.log('Success! :', res);
            dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(err => {
            console.log('My CodE HAs AN ErRoR: ', err);
            dispatch({ type: FETCH_SMURFS_FAILURE, payload: err})
        })
};

export const addSmurf = newGuy => dispatch => {
    dispatch({ type: ADD_SMURF_START });

    axios
        .post('http://localhost:3333/smurfs/', newGuy)
        .then(res => {
            console.log('successful post! :', res);
            dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data })
        })
    
        fetchSmurfs();
};