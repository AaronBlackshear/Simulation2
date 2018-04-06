import React, { Component } from 'react';

import House from '../House/House';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getHouses,searchHouses } from '../../redux/reducer';

class Dashboard extends Component{
    constructor(){
        super()
        this.getHouses = this.getHouses.bind(this);
    }

    componentDidMount() {
        this.getHouses();
    }

    getHouses(){
        this.props.getHouses();
    }

    render(){
        const { getHouses, dashboardHouses =[], loading, searchHouses } = this.props;

            let houseList = dashboardHouses.map((cur,ind) => {
                return (
                    <div key={ind}>
                        {/* <House /> */}
                        <House id={cur.id} name={cur.name} address={cur.address} city={cur.city} state={cur.state} zip={cur.zip} getHouses={this.getHouses}/>
                    </div>
                )
            });

        return (
            <div>
                Dashboard
                <button><Link to='/wizard'>Add New Property</Link></button>
                <input onChange={e => searchHouses(e.target.value)} placeholder='Search Address...' />
                {houseList}
            </div>
        )
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { getHouses,searchHouses })(Dashboard);