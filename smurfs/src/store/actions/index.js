import axios from 'axios';

export const FETCH_SMURFS_START = 'FETCH_SMURFS_START';
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS';
export const FETCH_SMURFS_FAILURE = 'FETCH_SMURFS_FAILURE';

export const ADD_SMURF_START = 'ADD_SMURF_START';
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE";

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const UPDATE_SMURF_START = "UPDATE_SMURF_START";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";

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
};


export const deleteSmurf = id => dispatch => {
    dispatch({ type: DELETE_SMURF_START });

    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res => {
            dispatch({type: DELETE_SMURF_SUCCESS, payload: res.data })
        })
        .catch(err => {
            dispatch({ type: DELETE_SMURF_FAILURE, payload: err })
        })
};

export const updateSmurf = (smurf, id) => dispatch => {
    dispatch({ type: UPDATE_SMURF_START });

    axios
        .put(`http://localhost:3333/smurfs/${id}`, smurf)
        .then(res => {
            dispatch({ type: UPDATE_SMURF_SUCCESS, payload: res.data})
        })
        .catch(err => {
            dispatch({ type: UPDATE_SMURF_FAILURE, payload: err})
        })
};