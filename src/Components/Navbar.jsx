import { AppBar, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../Redux/ActionsCreators';

const useStyles = makeStyles((theme) => ({
    appbar: {
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px !important"
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

    },
    header: {
        fontWeight: "bold !important",
        textTransform: "capitalize",
        cursor: "pointer"
    }
}));
function Navbar() {
    const mode = useSelector(state => state.mode)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles();
    const handelMode = () => {
        mode === "light" ? dispatch(setMode("dark")) : dispatch(setMode("light"))
        document.body.className = mode
    }
    return (
        <AppBar position='static' className={classes.appbar} enableColorOnDark color="element">
            <Container maxWidth="xl" disableGutters>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h6" className={classes.header} onClick={() => navigate("/")}>
                        where in the world?
                    </Typography>
                    <IconButton onClick={() => handelMode()}>
                        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Navbar