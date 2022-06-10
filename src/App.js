
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBy } from "./actions/filterBy.js";
import { storageData } from "./actions/storageData.js";
import { useFilterBy } from "./hooks/useFilterBy.js";
import { useGetData } from "./hooks/useGetData.js";

import { RouterApp } from "./routes/Router.jsx";
import { types } from "./types/types.js";


export const App = () => {
  const dataStored = useSelector(state => state.storage_reducer);
  const filterRe = useSelector(state => state.filter_reducer);



  const {data, loading} = useGetData(dataStored)
  
  return (
    <div className="App">
      {
        loading ? <h1>Loading...</h1>  : <RouterApp />
      }
    </div>
  );
}

export default App;
