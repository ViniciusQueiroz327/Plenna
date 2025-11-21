import { Home } from './Pages/Home/Home';
import { About } from './Pages/About/About';
// import { BookRegister } from './Pages/BookRegister/BookRegister';
import { BooksCatalog } from './Pages/BooksCatalog/BooksCatalog';
import { UserProfile } from './Pages/UserProfile/UserProfile';
import { Login } from './Pages/Login/Login';
import { Register } from './Pages/Register/Register';
import { PrivacyPolicy } from './Pages/PrivacyPolicy/PrivacyPolicy';
import { ServiceTerms } from './Pages/ServiceTerms/ServiceTerms';
import { DonateBooks } from './Pages/DonateBooks/DonateBooks';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { BookInfo } from './Pages/BookInfo/BookInfo';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/bookscatalog" element={<BooksCatalog/>}/>
        <Route path='/book/:id' element={<BookInfo/>}/>
        <Route path="/about" element={<About />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicy/>}/>
        <Route path='/serviceterms' element={<ServiceTerms/>}/>
        <Route path='/userprofile' element={<UserProfile/>}/>
        <Route path='/donate' element={<DonateBooks/>}/>
        {/* 
        
        <Route path="/bookregister" element={<BookRegister />}/>
        <Route path="/profile" element={<Profile />}/> */}
      </Routes>
    </Router>
  );
}

export default App;