import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Notes from "./components/Notes";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <CreateNote />
      <Notes />
    </>
  );
};

export default App;
library.add(fas);
