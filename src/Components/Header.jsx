import Display from "../Functions/Display.js"

function Header () {
return (<header>
  <div id="title">Benoit Théry</div>
  <div id="list">
    <div id="Home" className="button" onClick={() => Display ("profile_section")}>Accueil</div>
    <p>Réalisations :</p> 
    <div id="Moovit" className="button" onClick={() => Display("Moovit_section")}>MoovIt</div>
    <div id="Kasa" className="button" onClick={() => Display("Kasa_section")}>Kasa</div>
    {/* <div id="CaesR" className="button" onClick={() => display("CaesR_section")}>CaesR</div> */}
  </div>
</header>)
}

export default Header