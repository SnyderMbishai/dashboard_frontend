import axios from 'axios';
import * as types from './actionTypes';

// 1
export const fetchTopTenByProduced = () => (
    { 
      type: types.TOP_TEN_BY_PRODUCED,
    }
  ); 

export const fetchTopTenByProducedSuccess = payload => (
    {
      type: types.TOP_TEN_BY_PRODUCED_SUCCESS,
      payload,
    }
  );

export const fetchTopTenByProducedFails = errorMessage => (
    {
      type: types.TOP_TEN_BY_PRODUCED_FAILS,
      errorMessage,
    }
  );
// 2
export const fetchTopFiveByRejected = () => (
    {
      type : types.TOP_FIVE_BY_REJECTED,
    }
);

export const fetchTopFiveByRejectedSuccess = (payload) => (
    {
      type : types.TOP_FIVE_BY_REJECTED_SUCCESS,
      payload,
    }
);

export const fetchTopFiveByRejectedFails = (errorMessage) => (
    {
      type : types.TOP_FIVE_BY_REJECTED_FAILS,
      errorMessage,
    }
);
// 3
export const fetchBottomFivePending = () => (
    {
        type : types.BOTTOM_FIVE_BY_PENDING,
    }
);

export const fetchBottomFivePendingSuccess = (payload) => (
    {
        type : types.BOTTOM_FIVE_BY_PENDING,
        payload,
    }
);

export const fetchBottomFivePendingFails = (errorMessage) => (
    {
        type : types.BOTTOM_FIVE_BY_PENDING,
        errorMessage,
    }
);
// 4
export const fetchTotalProducedByDate = () => (
    {
        type : types.TOTAL_PRODUCED_BY_DATE,
    }
);

export const fetchTotalProducedByDateSuccess = (payload) => (
    {
        type : types.TOTAL_PRODUCED_BY_DATE_SUCCESS,
        payload,
    }
);

export const fetchTotalProducedByDateFails = (errorMessage) => (
    {
        type : types.TOTAL_PRODUCED_BY_DATE_FAILS,
        errorMessage,
    }
);

const base_url = "http://localhost:8000/api";

// fetch top 10 countries by produced
export function fetchCountriesByProduced(){
    return (dispatch) => {
        dispatch(fetchTopTenByProduced());
        return axios.get(`${base_url}/top_ten_produced`)
            .then(payload => dispatch(fetchTopTenByProducedSuccess(payload.data.results)))
            .catch(errorMessage => dispatch(fetchTopTenByProducedFails(errorMessage)));
    };
}

// fetch top 5 by rejected
export function fetchTopFiveCountriesByRejected(){
    return (dispatch) => {
        dispatch(fetchTopFiveByRejected());
        return axios.get(`${base_url}/top_five_rejected`)
            .then(payload => dispatch(fetchTopFiveByRejectedSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchTopFiveByRejectedFails(errorMessage)));
    };
}

// fetch bottom 5 by pending
export function fetchBottomFiveCountriesByPending(){
    return (dispatch) => {
        dispatch(fetchBottomFivePending());
        return axios.get(`${base_url}/least_five_pending`)
            .then(payload => dispatch(fetchBottomFivePendingSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchBottomFivePendingFails(errorMessage)));
    };
}

// fetch filtered by date
export function fetchFilteredByDate(){
    return (dispatch) => {
        dispatch(fetchTotalProducedByDate());
        return axios.get(`${base_url}/filter_by_date`)
            .then(payload => dispatch(fetchTotalProducedByDateSuccess(payload.data)))
            .catch(errorMessage => dispatch(fetchTotalProducedByDateFails(errorMessage)));
    };
}
