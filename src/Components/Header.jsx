import display from "../Functions/display"

function Header () {
return (<header>
  <div id="title">Benoit Théry</div>
  <div id="list">
    <div id="Home" className="button">Accueil</div>
    <p>Mon portfolio :</p> 
    <div id="Moovit" className="button" onClick={() => display("Moovit_section")}>MoovIt</div>
    <div id="Kaza" className="button">Kaza</div>
    <div id="CaesR" className="button">CaesR</div>
  </div>
</header>)
}

export default Header