import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountriesByProduced } from '../actions/action';

class TopTenByProduced extends Component {
    componentDidMount(){
        this.props.fetchCountriesByProduced();
    }

    render(){
        return (            
            <ul>
                <h1>1</h1>
                {this.props.items.map(element => (
                    <li key={element.name}>{element.name}</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return { 
        items : state.produced.produced_items
    };
}

export default connect(
    mapStateToProps,
    {fetchCountriesByProduced}
)(TopTenByProduced);