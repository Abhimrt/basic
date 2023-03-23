import { Route, Routes,Link } from 'react-router-dom';
import './App.css';
import Binary from './component/Binary';
import Decimal from './component/Decimal';
import Button from './component/Button';
import HexDecimal from './component/HexDecimal';
import Octal from './component/Octal';
import Hex from './component/Hex';
import OctalDecimal from './component/OctalDecimal';

function App() {
  return (
    <div className="App">
      <nav className='center'>
          <Link to={"/"}>____/ BASIC \____</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Button/>}/>
        
        <Route path="/binary" element={<Binary/>}/>
        <Route path="/decimal" element={<Decimal/>}/>
        <Route path="/hex" element={<Hex/>}/>
        <Route path="/hex_decimal" element={<HexDecimal/>}/>
        <Route path="/octal" element={<Octal/>}/>
        <Route path="/octal_decimal" element={<OctalDecimal/>}/>
      </Routes>
      {/* <Button/> */}
        <div className="footer center">
              <p>__||ॐ||__  Developer  " <a href="https://abhimrt.github.io/Portfolio/" target="_blank">Abhishek Singhal</a> " __||ॐ||__</p>
        </div>
    </div>
  );
}

export default App;
