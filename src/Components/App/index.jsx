import Profile from "../Profile"
import CaesR from "../Sites/CaesR"
import Moovit from "../Sites/Moovit"
import Site from "../Sites/Site"

function App () {

  return(<main>
    <Moovit />
    <CaesR />
    <Site />
    <Profile />
  </main>)
}

export default App