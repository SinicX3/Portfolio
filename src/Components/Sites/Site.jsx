import Carousel from "../../Shared Components/Carousel"

function Site({site}) {
  // Ne pas oublier la vérification des props
 
  return(
    <section id={`${site.name}_section`} className="panel">
      <div className="site_description">
        <img src={`/sites/${site.name}_logo.png`} id={`${site.name}_logo.png`} alt={`Logo de ${site.name}`} />
        <p>{site.description}</p>
      </div>
      <Carousel img={site.img} />
      <div className="site_skills">
        <div>
          <h2>Objectifs</h2>
          <ul>
            {site.goals.map((e) => <li>{e}</li>)}
          </ul>
        </div>
        <div>
          <h2>Technologies utilisées</h2>
          <ul>
            {site.techs.map((e) => <li>{e}</li>)}
          </ul>
        </div>
      </div>
          <div className="site_link">
      <a href={site.url} target="_blank" rel="noopener noreferrer">
        Retrouvez ce projet sur GitHub
      </a>
    </div>
    </section>
  )
}

export default Site
