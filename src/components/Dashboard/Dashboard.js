import React, { Component } from 'react';

import House from '../House/House';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getHouses } from '../../redux/reducer';

class Dashboard extends Component{

    componentDidMount() {
        this.props.getHouses();
    }

    render(){
        const { getHouses, dashboardHouses } = this.props;

        let housesList = dashboardHouses.map((cur,ind) => {
            return (
                // <House>{cur}</House>
                <House />
            )
        });

        return (
            <div>
                Dashboard
                <button><Link to='/wizard'>Add New Property</Link></button>
                <House />
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getHouses })(Dashboard);