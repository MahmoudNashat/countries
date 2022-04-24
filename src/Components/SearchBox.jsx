import { Container, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import { useDispatch } from 'react-redux';
import { filterRegion, searchForCountry } from '../Redux/ActionsCreators';

const useStyles = makeStyles((theme) => ({
    searchBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    searchField: {
        width: "100%",
        margin: "50px",
        backgroundColor: theme.palette.element.main,
        textTransform: "uppercase !important"
    },
    select: {
        backgroundColor: theme.palette.element.main,
    },
}))

function SearchBox() {
    const classes = useStyles()
    const [region, setRegion] = useState('')
    const dispatch = useDispatch()
    const handleRegion = (e) => {
        setRegion(e)
        dispatch(filterRegion(e))
    }
    const handelSearch = (e) => {
        dispatch(searchForCountry(e))
    }
    return (
        <Container maxWidth={false}>
            <Grid container className={classes.searchBox} spacing={5} marginTop={1}>
                <Grid item xs={12} md={5}>
                    <TextField
                        type="text"
                        className={classes.searchField}
                        placeholder="Search For a country..."
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                        color='element'
                        onChange={e => handelSearch(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <FormControl fullWidth className={classes.select}>
                        <InputLabel id="region">Filter by Region</InputLabel>
                        <Select
                            className={classes.select}
                            value={region}
                            labelId="region"
                            label="Region"
                            onChange={e => { handleRegion(e.target.value) }}
                            color="element"
                            MenuProps={{
                                disableScrollLock: false,
                            }}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value="Africa" style={{ backgroundColor: "theme.palette.element.main" }}>Africa</MenuItem>
                            <MenuItem value="Americas">Americas</MenuItem>
                            <MenuItem value="Asia">Asia</MenuItem>
                            <MenuItem value="Europe">Europe</MenuItem>
                            <MenuItem value="Oceania">Oceania</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid >
        </Container>
    )
}

export default SearchBox