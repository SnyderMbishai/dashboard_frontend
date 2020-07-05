import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFilteredByDate } from '../actions/action';
import './graphs.css';
import {Line} from 'react-chartjs-2';

class FilteredByDateRange extends Component {
    componentDidMount(){
        const params = {
            start : "2020-03-22",
            end : "2020-03-22"
        };
        this.props.fetchFilteredByDate(params);
    }


    render(){
        const data = {
            labels:this.props.items.map(el=> el.name),
    datasets: [
      {
        label: 'Produced units',
        fill: false,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: this.props.items.map(el=> el.unit_sum)
      }
    ]
        };
        return(
            <div>               
                <div className="graph">
                <Line
                    data={data}
                    options={{
                        title:{
                        display:true,
                        text:'Total Produced Units over 2020-02-28 to 2020-02-28',
                        fontSize:20
                        },
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                    />
                </div>                
            </div>
          
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