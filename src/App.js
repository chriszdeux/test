import { Header } from "./components/header";
import { ShortBy } from "./components/header/ShortBy";
import { MainFeedback } from "./components/main";
import { Suggestions } from "./components/suggestions";


function App() {
  return (
    <div className="App">
      <Header />
      <ShortBy />
      <MainFeedback />
    </div>
  );
}

export default App;
