
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storageData } from "./actions/storageData.js";
import { EditFeedback } from "./components/forms/EditFeedback.jsx";
import { Header } from "./components/header";
import { ShortBy } from "./components/header/ShortBy";
import { MainFeedback } from "./components/main";
import { FeedbackDetails } from "./components/main/FeedbackDetails";
import { NewFeedback } from "./components/main/NewFeedback";
import { NoFeedback } from "./components/main/NoFeedback";
import { RoadMapScreen } from "./components/roadmap/index.jsx";
import { Suggestions } from "./components/suggestions";
import { data } from "./constants/data.js";


function App() {
  const dispatch = useDispatch()
  const dataStored = useSelector(state => state.storage_reducer);
  useEffect(() => {
    dispatch(storageData(data) )
  }, [])

  return (
    <div className="App">
      {/* <Header />
      <ShortBy /> */}
      {/* <MainFeedback /> */}
      {/* <NoFeedback /> */}
      <FeedbackDetails />
      {/* <NewFeedback /> */}
      {/* <EditFeedback /> */}
      {/* <RoadMapScreen /> */}
    </div>
  );
}

export default App;
