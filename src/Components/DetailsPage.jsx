import { Button, Container, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    detailsContainer: {
        color: theme.palette.text.main
    },
    detailsItem: {
        display: "flex",
        alignItems: "center"
    },
    detailsImg: {
        width: "100%",
        height: "100%"
    },
}))

function DetailsPage() {
    const classes = useStyles()
    const detailsPage = useSelector(state => state.detailsPage)
    console.log(detailsPage);
    const navigate = useNavigate()
    const handelBack = () => {
        navigate(-1)
    }
    return (
        <Container maxWidth={false}>
            {
                detailsPage.map(item => {
                    const { name, flags, nativeName, population, region, area, capital, topLevelDomain, currencies, languages, timezones } = item
                    return (
                        <Grid container spacing={3} key={name} marginTop={4} className={classes.detailsContainer}>
                            <Grid item xs={12} marginBottom={2}>
                                <Button variant="contained" size="large" color='element' startIcon={<KeyboardBackspaceIcon />} onClick={() => handelBack()}>
                                    Back
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <img src={flags.png} alt={name + " flag"} className={classes.detailsImg} />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Grid container spacing={2} marginTop={1}>
                                    <Grid item xs={12}>
                                        <Typography variant="h4" fontWeight="bold">{name}</Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6} >
                                        <Typography sx={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }} variant="p" component="p" color="text">
                                            Native Name : <Typography variant='span' color="#888">{nativeName}</Typography>
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }} variant="p" component="p" color="text">
                                            Population : <Typography variant='span' color="#888">{population}</Typography>
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }} variant="p" component="p" color="text">
                                            Region : <Typography variant='span' color="#888">{region}</Typography>
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }} variant="p" component="p" color="text">
                                            Area : <Typography variant='span' color="#888">{area}</Typography>
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }} variant="p" component="p" color="text">
                                            Capital : <Typography variant='span' color="#888">{capital}</Typography>
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12} md={6}>
                                        <Typography sx={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }} variant="p" component="p" color="text">
                                            Top Level Domain : <Typography variant='span' color="#888">{topLevelDomain}</Typography>
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }} variant="p" component="p" color="text">
                                            Currencies : <Typography variant='span' color="#888">{currencies[0].name}</Typography>
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }} variant="p" component="p" color="text">
                                            Language : <Typography variant='span' color="#888">{languages[0].name}</Typography>
                                        </Typography>
                                        <Typography sx={{ fontSize: "18px", marginBottom: "15px", fontWeight: "bold" }} variant="p" component="p" color="text">
                                            Time Zone : {
                                                timezones.map(item => {
                                                    return (
                                                        <Typography variant='span' color="#888">{item} {timezones.length > 1 ? " , " : null} </Typography>
                                                    )
                                                })
                                            }
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })
            }
        </Container>
    )
}

export default DetailsPage