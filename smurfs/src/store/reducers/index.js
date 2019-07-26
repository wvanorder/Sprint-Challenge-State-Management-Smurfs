import {
    FETCH_SMURFS_START,
    FETCH_SMURFS_SUCCESS,
    FETCH_SMURFS_FAILURE,
    ADD_SMURF_START,
    ADD_SMURF_SUCCESS
} from '../actions';


export const initialState = {
    isLoading: false,
    error: '',
    smurfs: null,
    
};

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS_START:
            return{
                ...state,
                isLoading: true,
                error: '',
                smurfs: [],
            };
        case FETCH_SMURFS_SUCCESS: 
            return{
                ...state,
                isLoading: false,
                error: '',
                smurfs: action.payload
            };
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload,
            }
        case ADD_SMURF_START:
            return{
                ...state,
                isLoading: true,
                error: '',
            }
        case ADD_SMURF_SUCCESS:
            return{
                ...state,
                smurfs: action.payload,
                error: '',
                isLoading: false,
            }
        default:
            return state;
    };
};