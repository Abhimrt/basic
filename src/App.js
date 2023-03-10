import { Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Binary from './component/Binary';
import Button from './component/Button';


function App() {
  return (
    <div className="App">
      <nav className='center'>
          <Link to={"/"}>____/ BASIC \____</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Button/>}/>
        <Route path="/binary" element={<Binary/>}/>
      </Routes>
      {/* <Button/> */}
        <div className="footer center">
              <p>__||ॐ||__  Developer  " <a href="https://abhimrt.github.io/Portfolio/" target="_blank">Abhishek Singhal</a> " __||ॐ||__</p>
        </div>
    </div>
  );
}

export default App;
