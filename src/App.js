
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storageData } from "./actions/storageData.js";
import { data_json } from "./constants/data_json.js";
import { ContextData } from "./context/context.js";
import { useGetData } from "./hooks/useGetData.js";

import { RouterApp } from "./routes/Router.jsx";


export const App = () => {
  const dispatch = useDispatch()
  const dataStored = useSelector(state => state.storage_reducer);

  useEffect(() => {
    dataStored.length === 0 && dispatch(storageData(data_json.productRequests) )
  }, [])

  const postRef = useRef()
  
  return (
    <div className="App">
      <ContextData.Provider value={{
        postRef
      }}>
        <RouterApp />
      </ContextData.Provider>
    </div>
  );
}

export default App;
