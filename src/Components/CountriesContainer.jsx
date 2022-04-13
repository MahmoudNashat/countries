import { Pagination, Stack } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useDispatch, useSelector } from 'react-redux'
import { pageNum } from '../Redux/ActionsCreators'
import CountriesItems from './CountriesItems'
import SearchBox from './SearchBox'
import SkeletonLoader from './Skeleton'
import Error from "./Error"

const useStyles = makeStyles({
    pagination: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "40px 0px"
    }
})

function CountriesContainer() {
    const classes = useStyles()
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const data = useSelector(state => state.data);
    const page = useSelector(state => state.pageNum);
    const paginationCount = Math.ceil((data.length / 12))
    const dispatch = useDispatch()
    const handelPagination = (event, value) => {
        dispatch(pageNum(value))
        document.documentElement.scrollTop = 0;
    }
    return (
        <Stack>
            <SearchBox />
            {
                error ? (<Error />) : (
                    <Stack>
                        {loading ? (<SkeletonLoader />) : <CountriesItems />}
                        <Pagination count={paginationCount} page={page} onChange={handelPagination} className={classes.pagination} />
                    </Stack>
                )
            }
        </Stack>
    )
}

export default CountriesContainer