import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<h1 className='component'>Product listing component</h1>} />
          <Route path='/add' element={<h1 className='component'>Add Product component</h1>} />
          <Route path='/update' element={<h1 className='component'>Update Product listing component</h1>} />
          <Route path='/profile' element={<h1 className='component'>Profile component</h1>} />
          <Route path='/logout' element={<h1 className='component'>Logout component</h1>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
