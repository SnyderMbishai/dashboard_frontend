import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilteredByDate } from '../actions/action';

class FilteredByDateRange extends Component {
    componentDidMount(){
        const params = {
            start : "2020-03-22",
            end : "2020-03-22"
        };
        this.props.fetchFilteredByDate(params);
    }


    render(){
        return(
            <ul>
                <h1>4</h1>
                {console.log(this.props.items)}
                {this.props.items.map(element => (
                    <li key={element.name}>{element.name}</li>
                ))}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return{
        items : state.range.range_items
    };
}

export default connect(
    mapStateToProps,
    { fetchFilteredByDate }
)(FilteredByDateRange);