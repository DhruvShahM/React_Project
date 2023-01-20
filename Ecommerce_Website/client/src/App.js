import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';

import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';


function App() {
  return (
    <DataProvider>
    <div className="app">
      <Header />
      <Box style={{marginTop:54}}>
        <Home />
      </Box>
      </div>
    </DataProvider>
  );
}

export default App;
