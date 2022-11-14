import "./App.css";
import Header from "./components/Header";
import AddList from "./components/AddList";
import Filter from "./components/Filter";
import List from "./components/List";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <AddList />
        <Filter />
      </div>
      <List />
    </>
  );
}

export default App;
