import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopFiveCountriesByRejected } from '../actions/action';

class TopFiveByRejected extends Component {
    componentDidMount(){
        this.props.fetchTopFiveCountriesByRejected();
    }

    render(){
        return(
            <ul>
                <h1>2</h1>
                {this.props.items.map(element => (
                    <li key={element.name}>{element.name}</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        items : state.rejected.rejected_items
    };
}

export default connect(
    mapStateToProps,
    { fetchTopFiveCountriesByRejected }
)(TopFiveByRejected);
