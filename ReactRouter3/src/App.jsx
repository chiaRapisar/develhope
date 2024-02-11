import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import './App.css'
import { Homepage } from "./Homepage"
import { ShowGithubUser } from "./ShowGithubUser"
import { Counter } from "./Counter"
import { PageNotFound } from "./PageNotFound"
import { GithubUserList } from "./GithubUserList"

function App() {


  return (
    
<BrowserRouter>
<div>
<Link to="/">Homepage</Link> |  <Link to="/users">Utente Github</Link> | <Link to="/counter">Counter</Link> 

</div>
<Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/users/:username" element={<ShowGithubUser/>} />
  <Route path="/counter" element={<Counter/>}/>
  <Route path="users" element={<GithubUserList/>}>
  <Route index element={<p>Add a user and select it</p>}/ >
  </Route>
  <Route path="*" element={<PageNotFound />} />
 
</Routes>

</BrowserRouter>
     
  )
}

export default App
