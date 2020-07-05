import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTopFiveCountriesByRejected } from '../actions/action';
import './graphs.css';
import {Pie} from 'react-chartjs-2';

class TopFiveByRejected extends Component {
    componentDidMount(){
        this.props.fetchTopFiveCountriesByRejected();
    }

    render(){
        const data = {
            labels:this.props.items.map(el=> el.name),
        datasets: [
        {
            label: 'produced units',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4'
              ],
              hoverBackgroundColor: [
              '#501800',
              '#4B5000',
              '#175000',
              '#003350',
              '#35014F'
              ],
            data: this.props.items.map(el=> el.unit_sum)
        }
        ]
            };
        return(
            <div className="graph">
                <Pie
            data={data}
            options={{
                title:{
                display:true,
                text:'Top Five Total Rejected Units Per Country',
                fontSize:20
                },
                legend:{
                display:true,
                position:'right'
                }
             }}
        />
            </div>
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
