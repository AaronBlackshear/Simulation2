import axios from 'axios';

//INITIAL STATE
let initialState = {
    loading: false,
    wizardName: '',
    wizardAddress: '',
    wizardCity: '',
    wizardState: '',
    wizardZipcode: 0,
    dashboardHouses: []
}

//ACTION TYPE
const ENTER_NAME = 'ENTER_NAME';
const ENTER_ADDRESS = 'ENTER_ADDRESS';
const ENTER_CITY = 'ENTER_CITY';
const ENTER_STATE = 'ENTER_STATE';
const ENTER_ZIPCODE = 'ENTER_ZIPCODE';
const GET_HOUSES = 'GET_HOUSES';

//REDUCER
export default function reducer(state = initialState, action) {
    switch(action.type){
        case ENTER_NAME :
            return {...state, wizardName: action.payload};
        case ENTER_ADDRESS :
            return {...state, wizardAddress: action.payload};
        case ENTER_CITY :
            return {...state, wizardCity: action.payload};
        case ENTER_STATE :
            return {...state, wizardState: action.payload};
        case ENTER_ZIPCODE :
            return {...state, wizardZipcode: action.payload};
        case `${GET_HOUSES}_PENDING` :
            return {...state, loading: true};
        case `${GET_HOUSES}_FULFILLED` :
            return {...state, dashboardHouses: action.payload.data, loading: false};
    }
        
}

//ACTION CREATOR
export function enterName(val) {
    return {
        type: ENTER_NAME,
        payload: val
    }
}
export function enterAddress(val) {
    return {
        type: ENTER_ADDRESS,
        payload: val
    }
}
export function enterCity(val) {
    return {
        type: ENTER_CITY,
        payload: val
    }
}
export function enterState(val) {
    return {
        type: ENTER_STATE,
        payload: val
    }
}
export function enterZipcode(val) {
    return {
        type: ENTER_ZIPCODE,
        payload: val
    }
}
export function getHouses() {
    return {
        type: GET_HOUSES,
        payload: axios.get('/api/getHouses')
    }
}