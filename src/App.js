import './App.css';
import Table from './components/Table';
import Header from "./components/Header"

function App() {
  return (<div className="main">
            <div>
              <Header/>
            </div>
            <div>
              <Table/>
            </div>
          </div>
    
  );
}

export default App;
