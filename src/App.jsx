import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Gallery from './component/Gallery';
import Collection from './component/Collection';
import { useContext } from 'react';
import { DataContext } from './Context/ContextApi';
import Home from './component/Home';

function App() {

  // use useContext for getting global component state
  const useContextAPI = useContext(DataContext);

  return (
    <>
      {/* use theme sate for dark and light theme  */}
      <div style={{ ...(useContextAPI?.colorPreferences && { backgroundColor: useContextAPI.color }), }}
        className={`${useContextAPI.theme === "dark" && "dark"}`}>
        <Router>
          {/* header component comes in all route  */}
          <Header />
          {/* these are routes that at which path which component will mount   */}
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/collection/gallery" element={<Home />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
