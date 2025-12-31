import { Body } from "./components/Body";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Todo } from "./components/Todo";

function App() {
  return (
    <div className="App">
     <Header/>
     <Body/>
     <Todo/>
     <Footer/>
    </div>
  );
}

export default App;
