import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Gallery from './component/Gallery';
import Collection from './component/Collection';
import { useContext } from 'react';
import { DataContext } from './Context/ContextApi';
import Home from './component/Home';

function App() {

  const useContextAPI = useContext(DataContext);
  
  return (
    <>
    <div className={`${useContextAPI.theme === "dark" && "dark"}`}>
      <Router>
      <Header /> 
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/collection/gallery" element={ <Home />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
