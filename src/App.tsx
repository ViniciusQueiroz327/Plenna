import { Home } from './Pages/Home/Home';
// import { About } from './Pages/About/About';
// import { BookRegister } from './Pages/BookRegister/BookRegister';
import { BooksCatalog } from './Pages/BooksCatalog/BooksCatalog';
// import { Profile } from './Pages/Profile/Profile';
// import { Login } from './Pages/Login/Login';
// import { Register } from './Pages/Register/Register';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/bookscatalog" element={<BooksCatalog />}/>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/bookregister" element={<BookRegister />}/>
        
        <Route path="/profile" element={<Profile />}/> */}
      </Routes>
    </Router>
  );
}

export default App;