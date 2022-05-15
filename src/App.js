
import './App.css';
import {Provider} from 'react-redux';
import { HashRouter as Router,Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';
import Movie from './components/home/Movie';

import store from './components/store';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
      <Header />
       <div className="app">
         <Routes>
         <Route exact path='/' element={<Landing/>} />
         <Route exact path='/movie/:id' element={<Movie/>} />
         </Routes>
       </div>
      <Footer />
      </div>
      </Router>
    </Provider>
  );
}

export default App;
