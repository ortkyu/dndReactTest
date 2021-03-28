import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { CardList } from "./Componenets/CardList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <CardList />
      </DndProvider>
    </div>
  );
}

export default App;
