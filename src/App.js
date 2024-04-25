import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Productlists from './pages/Productlists';
import Singleview from './pages/Singleview';
import Pnf from './pages/Pnf';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Productlists></Productlists>}></Route>
        <Route path='/single-view/:id' element={<Singleview></Singleview>}></Route>
        <Route path='/*' element={<Pnf></Pnf>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
