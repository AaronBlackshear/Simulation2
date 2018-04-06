import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { enterName, enterAddress, enterCity, enterState, enterZipcode } from '../../redux/reducer';

class Wizard extends Component{

    componentDidMount() {
        this.props.enterName()
    }

    render(){
        const { enterName, enterAddress, enterCity, enterState, enterZipcode } = this.props;
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
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { enterName, enterAddress, enterCity, enterState, enterZipcode })(Wizard);