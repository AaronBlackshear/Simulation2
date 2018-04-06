import React, { Component } from 'react';

import {connect} from 'react-redux';
import {deleteHouse,addFavorite,updateHouse,updateName,updateAddress,updateCity,updateState,updateZipcode} from '../../redux/reducer';

class House extends Component{
    constructor(){
        super()
    }

    render(){
        const { id,name,address,city,state,zip,deleteHouse,getHouses,addFavorite,wizardName,wizardAddress,wizardCity,wizardState,wizardZipcode,editHouse,newName,newAddress,newCity,newState,newZipcode,} = this.props;
        // console.log(this.props)
        return (
            <div>
                <p>Propery Name: {name}</p>
                <input onChange={e => this.props.updateName(e.target.value)} />
                {/* <button onChange={} >Change</button> */}
                <p>Address: {address}</p>
                <input onChange={e => this.props.updateAddress(e.target.value)} />
                <p>City: {city}</p>
                <input onChange={e => this.props.updateCity(e.target.value)} />
                <p>State: {state}</p>
                <input onChange={e => this.props.updateState(e.target.value)} />
                <p>Zipcode: {zip}</p>
                <input onChange={e => this.props.updateZipcode(e.target.value)} />
                <button onClick={() => addFavorite(name,address,city,state,zip)} >Favorite</button>
                <button onClick={() => {this.props.updateHouse(id,newName,newAddress,newCity,newState,newZipcode), getHouses()}} >Edit</button>
                <button onClick={() => {deleteHouse(id), getHouses() }} >Delete</button>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { deleteHouse,addFavorite,updateHouse,updateName,updateAddress,updateCity,updateState,updateZipcode })(House);

// editHouse(id,name,address,city,state,zip)