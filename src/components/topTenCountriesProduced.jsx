import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCountriesByProduced } from '../actions/action';
import './graphs.css';
import {Bar} from 'react-chartjs-2';


class TopTenByProduced extends Component {
    componentDidMount(){
        this.props.fetchCountriesByProduced();
    }

    render(){
        const data = {
            labels:this.props.items.map(el=> el.name),
        datasets: [
        {
            label: 'produced units',
            fill: false,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: this.props.items.map(el=> el.unit_sum)
        }
        ]
            };
        
        return (    
            <div className="graph">
                <Bar
                    data={data}
                    options={{
                        title:{
                        display:true,
                        text:'Top Ten Total Produced Units Per Country',
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
    return { 
        items : state.produced.produced_items
    };
}

export default connect(
    mapStateToProps,
    {fetchCountriesByProduced}
)(TopTenByProduced);