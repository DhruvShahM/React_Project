import logo from './logo.svg';
import './App.css';
import Header from './Components/header/Header';
import Home from './Components/Home/Home';

import { Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <Box style={{marginTop:54}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
