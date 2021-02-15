import './App.css';
import Navbar from "./components/Navbar";
import Table from './components/Table';
import Header from "./components/Header"

function App() {
  return (<div className="main">
            <div>
              <Header/>
            </div>
            <div>
            <Navbar/>
            </div>
            <div>
              <Table/>
            </div>
          </div>
    
  );
}

export default App;
