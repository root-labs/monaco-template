
import './App.css';
import Navi from './componentsMine/Navi';
import { Route, Routes } from 'react-router-dom';
import CodeM from './componentsMine/CodeM';
import Monac from './componentsMine/Monac';
import Monac1 from './componentsMine/Monac1';

function App() {
return (
    <div >
     <Navi />
     <button>Record</button>
     <Routes >
       <Route path="/mirror" element={<CodeM />} />
       <Route path="/monaco" element={<Monac />} />
       <Route path="/monaco1" element={<Monac1 />} />
     </Routes>
    </div>
  );
}

export default App;
