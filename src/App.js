import './App.css';
import {Routes, Route} from "react-router-dom";
import Homepage from './pages/Homepage';
import CreateForm from './pages/CreateForm';
import EditForm from "./pages/EditForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Homepage/>}/>
        <Route path="/CreateForm" element={<CreateForm/>}/>
        <Route path="/EditForm" element={<EditForm/>}/>
      </Routes>
    </div>
  );
}

export default App;
