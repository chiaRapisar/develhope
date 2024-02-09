import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import { Homepage } from "./Homepage"
import { ShowGithubUser } from "./ShowGithubUser"
import { Counter } from "./Counter"
import { PageNotFound } from "./PageNotFound"

function App() {


  return (
    
<BrowserRouter>
<div>
<Link to="/">Homepage</Link> |  <Link to="users/:username">Utente Github</Link> | <Link to="/counter">Counter</Link>
</div>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="users/:username" element={<ShowGithubUser/>} />
  <Route path="/counter" element={<Counter/>}/>
  <Route path="*" element={<PageNotFound />} />
</Routes>

</BrowserRouter>
     
  )
}

export default App
