import { DETAILS_PAGE, FETCH_DATA_FAILURE, FETCH_DATA_LOADING, FETCH_DATA_SUCCESS, FILTER_BY_REGION, MODE, PAGE_NUM, SEARCH_VALUE } from "./ActionsTypes"
const initState = {
    loading: false,
    data: [],
    error: false,
    mode: 'light',
    pageNum: 1,
    searchValue: '',
    selectBoxValue: '',
    detailsPage: [JSON.parse(localStorage.getItem("detailsItem"))],

}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_DATA_LOADING:
            return {
                ...state,
                loading: true,
                data: [],
                error: false
            }
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: false
            }
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                data: [],
                error: true
            }
        case MODE:
            return {
                ...state,
                mode: action.payload
            }
        case PAGE_NUM:
            return {
                ...state,
                pageNum: action.payload
            }
        case SEARCH_VALUE:
            return {
                ...state,
                data: action.payload
            }
        case FILTER_BY_REGION:
            return {
                ...state,
                data: action.payload
            }
        case DETAILS_PAGE:
            return {
                ...state,
                detailsPage: [JSON.parse(localStorage.getItem("detailsItem"))]
            }
        default: return state
    }
}
export default reducer