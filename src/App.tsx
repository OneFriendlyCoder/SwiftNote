import Typography from '@mui/material/Typography';
import Login from './Login/Login';
import Draw from './Draw';
import Missing from './Missing';
import SignUp from './Signup/SignUp';
import Welcome from './landing/Welcome';
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* public access routes*/}
          <Route path="/login" element={<Login/>} />   
          <Route path="/signup" element={<SignUp/>} />   
        {/* protected access routes*/}

        {/*catch other routes*/}
        <Route path="/*" element={<Missing/>} />
      </Routes>
    </>
  )
}

export default App
