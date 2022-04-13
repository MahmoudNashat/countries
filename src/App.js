import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Navbar from './Components/Navbar';
import { Theme } from './theme';
import { fetchData } from "./Redux/ActionsCreators"
import CountriesContainer from './Components/CountriesContainer';
import { Routes, Route } from 'react-router-dom';
import DetailsPage from './Components/DetailsPage';


function App() {
  const mode = useSelector(state => state.mode)
  const dispatch = useDispatch()
  useEffect(() => {
    document.body.className = mode
  }, [mode])
  useEffect(() => {
    dispatch(fetchData())
  }, [])
  const theme = createTheme(Theme(mode))
  return (
    <ThemeProvider theme={theme}>
      <div className='App' color={theme.element}>
        <Navbar />
        <Routes>
          <Route path='/' element={<CountriesContainer />} />
          <Route path='/Details' element={<DetailsPage />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
