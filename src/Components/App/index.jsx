import Profile from "../Profile"
import CaesR from "../Sites/CaesR"
import Site from "../Sites/Site"
import data from "../../data/data.json"

function App () {

  return(<main>
    <CaesR />
    {data.map((e, index) => <Site key={index} site={e}/>)}
    <Profile />
  </main>)
}

export default App