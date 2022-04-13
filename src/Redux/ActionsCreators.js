import axios from "axios"
import { DETAILS_PAGE, FETCH_DATA_FAILURE, FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FILTER_BY_REGION, MODE, PAGE_NUM, SEARCH_VALUE } from "./ActionsTypes"

export const fetchDataLoading = () => {
    return {
        type: FETCH_DATA_LOADING
    }
}
export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}
export const fetchDataFailure = () => {
    return {
        type: FETCH_DATA_FAILURE,
    }
}
export const setMode = (mode) => {
    return {
        type: MODE,
        payload: mode
    }
}
export const pageNum = (page) => {
    return {
        type: PAGE_NUM,
        payload: page
    }
}
export const searchValue = (data) => {
    return {
        type: SEARCH_VALUE,
        payload: data
    }
}
export const filterByRegion = (data) => {
    return {
        type: FILTER_BY_REGION,
        payload: data
    }
}
export const showDetails = () => {
    return {
        type: DETAILS_PAGE,
    }
}
export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataLoading());
        axios.get("https://restcountries.com/v2/all")
            .then((res) => {
                dispatch(fetchDataSuccess(res.data))
            })
            .catch((error) => {
                dispatch(fetchDataFailure(error))
            })
    }
}
export const searchForCountry = (e) => {
    return (dispatch) => {
        if (e !== '') {
            axios.get(`https://restcountries.com/v2/name/${e}`)
                .then((res) => {
                    dispatch(searchValue(res.data))
                })
                .catch(err => {
                    dispatch(fetchDataFailure())
                })
        } else {
            axios.get("https://restcountries.com/v2/all")
                .then((res) => {
                    dispatch(fetchDataSuccess(res.data))
                })
        }
    }
}
export const filterRegion = (e) => {
    return (dispatch) => {
        if (e !== '') {
            axios.get(`https://restcountries.com/v2/region/${e}`)
                .then((res) => {
                    dispatch(filterByRegion(res.data))
                })
                .catch(err => {
                    dispatch(fetchDataFailure())
                })
        } else {
            axios.get("https://restcountries.com/v2/all")
                .then((res) => {
                    dispatch(fetchDataSuccess(res.data))
                })
        }
    }
}