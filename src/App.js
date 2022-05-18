import React , {useState} from "react";

//// pages + components

import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

export const AppContext = React.createContext(null)

function App() {
  const [page , setPage] = useState('page1')
  const [email , setEmail] = useState('')
  return (
   <AppContext.Provider value={{page , email ,setEmail , setPage}}>
   {
     {
       'page1': <><Page1/></>,
       'page2': <><Page2/></>,
       'page3': <><Page3/></>,

     }[page]
   }

   </AppContext.Provider>
  );
}

export default App;
