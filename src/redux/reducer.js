import axios from 'axios';

//INITIAL STATE
let initialState = {
    loading: false,
    wizardName: '',
    wizardAddress: '',
    wizardCity: '',
    wizardState: '',
    wizardZipcode: 0,
    dashboardHouses: [],
    newName: '',
    newCity: '',
    newState: '',
    newZipcode: '',
    toggleEdit: false
}

//ACTION TYPE
const ENTER_NAME = 'ENTER_NAME';
const ENTER_ADDRESS = 'ENTER_ADDRESS';
const ENTER_CITY = 'ENTER_CITY';
const ENTER_STATE = 'ENTER_STATE';
const ENTER_ZIPCODE = 'ENTER_ZIPCODE';
const GET_HOUSES = 'GET_HOUSES';
const ADD_HOUSE = 'ADD_HOUSE';
const DELETE_HOUSE = 'DELETE_HOUSE';
const ADD_FAVORITE = 'ADD_FAVORITE';
const SEARCH_HOUSES = 'SEARCH_HOUSES';
const UPDATE_HOUSE = 'UPDATE_HOUSE';
// const TOGGLE_EDIT = 'TOGGLE_EDIT';
const UPDATE_NAME = 'UPDATE_NAME';
const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_STATE = 'UPDATE_STATE';
const UPDATE_ZIPCODE = 'UPDATE_ZIPCODE';

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
        case `${ADD_HOUSE}_PENDING` :
            return {...state, loading: true};
        case `${ADD_HOUSE}_FULFILLED` :
            return {...state, loading: false, dashboardHouses: action.payload.data};
        case `${DELETE_HOUSE}_PENDING` :
            return {...state, loading: true};
        case `${DELETE_HOUSE}_FULFILLED` :
            return {...state, loading: false, dashboardHouses: action.payload.data};
        case `${ADD_FAVORITE}_PENDING` :
            return {...state, loading: true};
        case `${ADD_FAVORITE}_FULFILLED` :
            return {...state, loading: false};
        case `${SEARCH_HOUSES}_PENDING` :
            return {...state, loading: true};
        case `${SEARCH_HOUSES}_FULFILLED` :
            return {...state, loading: false, dashboardHouses: action.payload.data};
        case `${UPDATE_HOUSE}_PENDING` :
            return {...state, loading: true};
        case `${UPDATE_HOUSE}_FULFILLED` :
            return {...state, loading: false, dashboardHouses: action.payload.data};
        // case TOGGLE_EDIT :
        //     return {...state, toggleEdit: action.payload}
        case UPDATE_NAME :
            return {...state, newName: action.payload};
        case UPDATE_ADDRESS :
            return {...state, newAddress: action.payload};
        case UPDATE_CITY :
            return {...state, newCity: action.payload};
        case UPDATE_STATE :
            return {...state, newState: action.payload};
        case UPDATE_ZIPCODE :
            return {...state, newZipcode: action.payload};
        default: return state;
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
export function addHouse(wizardName,wizardAddress,wizardCity,wizardState,wizardZipcode){
    return {
        type: ADD_HOUSE,
        payload: axios.post('/api/addHouse', { wizardName,wizardAddress,wizardCity,wizardState,wizardZipcode })
    }
}
export function deleteHouse(id) {
    return {
        type: DELETE_HOUSE,
        payload: axios.delete(`/api/deleteHouse/${id}`)
    }
}
export function addFavorite(name,address,city,state,zip) {
    return {
        type: ADD_FAVORITE,
        payload: axios.post('/api/addFav', {name,address,city,state,zip})
    }
}
export function searchHouses(address) {
    return {
        type: SEARCH_HOUSES,
        payload: axios.get(`/api/search?address=${address}`)
    }
}
// export function updateHouse(){
//     return {
//         type: UPDATE_HOUSE,
//         payload: axios.put()
//     }
// }
export function updateHouse(id,newName,newAddress,newCity,newState,newZipcode) {
    console.log(id,newName,newAddress,newCity,newState,newZipcode)
    return {
        type: UPDATE_HOUSE,
        payload: axios.put(`/api/editHouse/${id}`, { newName,newAddress,newCity,newState,newZipcode })
    }
}
export function updateName(val) {
    return {
        type: UPDATE_NAME,
        payload: val
    }
}
export function updateAddress(val) {
    return {
        type: UPDATE_ADDRESS,
        payload: val
    }
}
export function updateCity(val) {
    return {
        type: UPDATE_CITY,
        payload: val
    }
}
export function updateState(val) {
    return {
        type: UPDATE_STATE,
        payload: val
    }
}
export function updateZipcode(val) {
    return {
        type: UPDATE_ZIPCODE,
        payload: val
    }
}