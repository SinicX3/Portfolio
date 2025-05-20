import Display from "../../Functions/Display.js"

function Header () {
return (<header>
  <div id="title" onClick={() => Display ("profile__section")}>Benoit Théry</div>
  <div id="list">
    <div id="Home" className="button" onClick={() => Display ("profile__section")}>Accueil</div>
    <p>Réalisations :</p> 
    <div id="Moovit" className="button" onClick={() => Display("Moovit__section")}>MoovIt</div>
    <div id="Kasa" className="button" onClick={() => Display("Kasa__section")}>Kasa</div>
    {/* <div id="CaesR" className="button" onClick={() => Display("CaesR_section")}>CaesR</div> // Un autre projet à venir !*/} 
  </div>
</header>)
}

export default Header