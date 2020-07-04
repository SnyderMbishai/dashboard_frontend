import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBottomFiveCountriesByPending } from '../actions/action';

class BottomFiveByPending extends Component {
    componentDidMount(){
        this.props.fetchBottomFiveCountriesByPending();
    }

    render(){
        return(
            <ul>
                <h1>3</h1>
                {this.props.items.map(element => (
                    <li key={element.name}>{element.name}</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        items : state.pending.pending_items
    };
}

export default connect(
    mapStateToProps,
    { fetchBottomFiveCountriesByPending }
)(BottomFiveByPending);