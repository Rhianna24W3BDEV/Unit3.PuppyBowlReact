import AllPlayers from "./pages/AllPlayers"
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import SinglePlayer from "./pages/SinglePlayer";
import CreatePlayerForm from "./components/CreatePlayerForm";
import Search from "./components/SearchBar";


function App() {

  return (
    <>
    <BrowserRouter>
    <Search/>
    <Link to = '/create-player'>Create Player</Link>
      <Routes>
        <Route path = '/create-player' element = {<CreatePlayerForm/>}></Route>
        <Route path = '/' element={<AllPlayers />}></Route>
        <Route path = '/single-player/:playerId' element = {<SinglePlayer/>}></Route>
      </Routes>
    </BrowserRouter>
 
    </>
  )
}

export default App
