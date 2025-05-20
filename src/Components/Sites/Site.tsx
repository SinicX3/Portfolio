import Carousel from "../../Shared Components/Carousel"
import type { Site, SiteProps } from "../../data/types"

function Site({site}: SiteProps) {
 
  return(
    <section id={`${site.name}__section`} className="panel">
      <div className="site__description">
        <img src={`/sites/${site.name}_logo.png`} id={`${site.name}_logo.png`} alt={`Logo de ${site.name}`} />
        <p>{site.description}</p>
      </div>
      <Carousel img={site.img} />
      <div className="site__skills">
        <div>
          <h2>Objectifs</h2>
          <ul>
            {site.goals.map((e: string) => <li>{e}</li>)}
          </ul>
        </div>
        <div>
          <h2>Technologies utilisées</h2>
          <ul>
            {site.techs.map((e: string) => <li>{e}</li>)}
          </ul>
        </div>
      </div>
          <div className="site__link">
      <a href={site.url} target="_blank" rel="noopener noreferrer">
        Retrouvez ce projet sur GitHub
      </a>
    </div>
    </section>
  )
}

export default Site
