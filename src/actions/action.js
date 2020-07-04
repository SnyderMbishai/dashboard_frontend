import axios from 'axios';
import * as types from './actionTypes';

// 1
const fetchTopTenByProduced = () => (
    { 
      type: types.TOP_TEN_BY_PRODUCED,
    }
  ); 

const fetchTopTenByProducedSuccess = payload => { 
    return (
    {
      type: types.TOP_TEN_BY_PRODUCED_SUCCESS,
      payload,
    }
  )};

const fetchTopTenByProducedFails = errorMessage => (
    {
      type: types.TOP_TEN_BY_PRODUCED_FAILS,
      errorMessage,
    }
  );
// 2
const fetchTopFiveByRejected = () => (
    {
      type : types.TOP_FIVE_BY_REJECTED,
    }
);

const fetchTopFiveByRejectedSuccess = (payload) => (
    {
      type : types.TOP_FIVE_BY_REJECTED_SUCCESS,
      payload,
    }
);

const fetchTopFiveByRejectedFails = (errorMessage) => (
    {
      type : types.TOP_FIVE_BY_REJECTED_FAILS,
      errorMessage,
    }
);
// 3
const fetchBottomFivePending = () => (
    {
        type : types.BOTTOM_FIVE_BY_PENDING,
    }
);

const fetchBottomFivePendingSuccess = (payload) => (
    {
        type : types.BOTTOM_FIVE_BY_PENDING_SUCCESS,
        payload,
    }
);

const fetchBottomFivePendingFails = (errorMessage) => (
    {
        type : types.BOTTOM_FIVE_BY_PENDING_FAILS,
        errorMessage,
    }
);
// 4
const fetchTotalProducedByDate = () => (
    {
        type : types.TOTAL_PRODUCED_BY_DATE,
    }
);

const fetchTotalProducedByDateSuccess = (payload) => (
    {
        type : types.TOTAL_PRODUCED_BY_DATE_SUCCESS,
        payload,
    }
);

const fetchTotalProducedByDateFails = (errorMessage) => (
    {
        type : types.TOTAL_PRODUCED_BY_DATE_FAILS,
        errorMessage,
    }
);

const base_url = "http://localhost:8000/api";

// fetch top 10 countries by produced
function fetchCountriesByProduced(){
    return (dispatch) => {
        dispatch(fetchTopTenByProduced());
        return axios.get(`${base_url}/top_ten_produced`)
            .then(payload => dispatch(fetchTopTenByProducedSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchTopTenByProducedFails(errorMessage)));
    };
}

// fetch top 5 by rejected
function fetchTopFiveCountriesByRejected(){
    return (dispatch) => {
        dispatch(fetchTopFiveByRejected());
        return axios.get(`${base_url}/top_five_rejected`)
            .then(payload => dispatch(fetchTopFiveByRejectedSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchTopFiveByRejectedFails(errorMessage)));
    };
}

// fetch bottom 5 by pending
function fetchBottomFiveCountriesByPending(){
    return (dispatch) => {
        dispatch(fetchBottomFivePending());
        return axios.get(`${base_url}/least_five_pending`)
            .then(payload => //{console.log(payload)
                dispatch(fetchBottomFivePendingSuccess(payload.data))//}
                )
            .catch(errorMessage => dispatch(fetchBottomFivePendingFails(errorMessage)));
    };
}

// fetch filtered by date
function fetchFilteredByDate(params){
    return (dispatch) => {
        dispatch(fetchTotalProducedByDate());
        return axios.get(`${base_url}/filter_by_date?start_date=${params.start}&end_date=${params.end}`)
            .then(payload => {
                console.log(payload.data, "thiiiiiiiiiiiii")
                dispatch(fetchTotalProducedByDateSuccess(payload.data))
            }
                )
            .catch(errorMessage => dispatch(fetchTotalProducedByDateFails(errorMessage)));
    };
}

export {
    fetchCountriesByProduced,
    fetchTopFiveCountriesByRejected,
    fetchBottomFiveCountriesByPending,
    fetchFilteredByDate
}
