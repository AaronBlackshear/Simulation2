import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { enterName, enterAddress, enterCity, enterState, enterZipcode,addHouse } from '../../redux/reducer';

class Wizard extends Component{
    constructor(){
        super()
        this.addProperty = this.addProperty.bind(this);
    }

    componentDidMount() {
        this.addProperty();
    }

    addProperty(){
        this.props.enterName();
    }

    render(){
        const { enterName, enterAddress, enterCity, enterState, enterZipcode, wizardAddress, wizardCity, wizardName, wizardState, wizardZipcode  } = this.props;
        // console.log(this.props)
        return (
            <div>
                Wizard
                <button><Link to='/'>Cancel</Link></button>
                <h3>Property Name</h3>
                <input onChange={e => enterName(e.target.value)} />
                <h3>Address</h3>
                <input onChange={e => enterAddress(e.target.value)} />
                <h3>City</h3>
                <input onChange={e => enterCity(e.target.value)} />
                <h3>State</h3>
                <input onChange={e => enterState(e.target.value)} />
                <h3>Zipcode</h3>
                <input onChange={e => enterZipcode(e.target.value)} />
                <button onClick={() => {addHouse(wizardName,wizardAddress,wizardCity,wizardState,wizardZipcode), this.addProperty()}} ><Link to='/'>Complete</Link></button>
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { enterName, enterAddress, enterCity, enterState, enterZipcode, addHouse })(Wizard);