import { makeStyles } from '@mui/styles'
import { Card, CardActionArea, CardMedia, Container, Grid, Typography, CardContent } from '@mui/material';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { showDetails } from '../Redux/ActionsCreators';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.element.main
    }
}))

function CountriesItems() {
    const classes = useStyles()
    const data = useSelector(state => state.data);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const pageNum = useSelector(state => state.pageNum);
    const [itemsPerPage] = useState(12);
    const lastItemIndex = pageNum * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const sortedData = data.sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });
    const countriesData = sortedData.slice(firstItemIndex, lastItemIndex);
    const handelDetails = (name) => {
        navigate("/Details")
        const detailsItem = data.find(item => {
            return item.name === name
        })
        localStorage.setItem("detailsItem", JSON.stringify(detailsItem))
        dispatch(showDetails())
        document.documentElement.scrollTop = 0;
    }
    return (
        <Container maxWidth={false}>
            <Grid container spacing={4} marginTop={3}>
                {
                    countriesData.map(item => {
                        const { name, flags, population, region, capital } = item;
                        return (
                            <Grid item xs={12} sm={6} md={4} lg={3} key={name}>
                                <Card onClick={() => { handelDetails(name) }}>
                                    <CardActionArea>
                                        <Box height={200}>
                                            <CardMedia
                                                component="img"
                                                image={flags.png}
                                                alt={name + " flag"}
                                                sx={{ maxWidth: "100%", height: "100%" }}
                                                loading="lazy"
                                            />
                                        </Box>
                                        <CardContent className={classes.card}>
                                            <Typography sx={{ fontWeight: "bold" }} gutterBottom variant="h5" component="h5">
                                                {name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", marginBottom: "5px" }} variant="p" component="p" color="text">
                                                Population : <Typography variant='span' color="#888">{population}</Typography>
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", marginBottom: "5px" }} variant="p" component="p" color="text">
                                                Region : <Typography variant='span' color="#888">{region}</Typography>
                                            </Typography>
                                            <Typography sx={{ fontSize: "18px", marginBottom: "5px" }} variant="p" component="p" color="text">
                                                Capital : <Typography variant='span' color="#888">{capital}</Typography>
                                            </Typography>
                                            <Typography color="primary" marginTop={2} onClick={() => { handelDetails(name) }}>
                                                More Details
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default CountriesItems