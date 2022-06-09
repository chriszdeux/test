
import { EditFeedback } from "./components/forms/EditFeedback.jsx";
import { Header } from "./components/header";
import { ShortBy } from "./components/header/ShortBy";
import { MainFeedback } from "./components/main";
import { FeedbackDetails } from "./components/main/FeedbackDetails";
import { NewFeedback } from "./components/main/NewFeedback";
import { NoFeedback } from "./components/main/NoFeedback";
import { Suggestions } from "./components/suggestions";


function App() {
  return (
    <div className="App">
      {/* <Header />
      <ShortBy /> */}
      {/* <MainFeedback /> */}
      {/* <NoFeedback /> */}
      {/* <FeedbackDetails /> */}
      {/* <NewFeedback /> */}
      <EditFeedback />
    </div>
  );
}

export default App;
