import "./App.css";
import Header from "./components/Header/Header";
import Graph from "./components/Graph/Graph";
import Table from "./components/Table/Table";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container1">
        <SideBar/>
        <div className="container2">
          <Graph />
          <Table />
        </div>
        
      </div>
      
      
    </div>
  );
}

export default App;
