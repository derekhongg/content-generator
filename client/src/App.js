import logo from './logo.svg';
import Navigation from './components/Navigation';
import ColdEmails from './components/ColdEmails';
import Home from './components/Home';
import ProductDescription from './components/ProductDescription';
import Tweets from './components/Tweets';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/product-description" element={<ProductDescription/>}/>
          <Route path="/tweets" element={<Tweets/>}/>
          <Route path="/cold-emails" element={<ColdEmails/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
