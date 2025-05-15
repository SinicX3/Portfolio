import Hidden from "../../Functions/Hidden";
import ModalComponent from "../ModalComponent"
import { useState } from "react"

function Profile () {

  const [modalOpen, setModalOpen] = useState(false);
  Hidden("profile_section", 500)
  Hidden("react", 1000)

  return(
  <section id="profile_section" className="panel hidden">
    <div className="profile">
      <img src="/IMG_9743.jpg" id="photo"/>
      <div className="text">
        <h1>Développeur frontend junior</h1>
        <p>Ancien rédacteur SEO, je me consacre aujourd'hui à la création d'interfaces intuitives.</p>
        <p>Ici, vous pouvez découvrir quelques-uns des projets (personnels et professionnels) sur lesquels j'interviens.</p>
        <div id="contact">
          <a href="mailto:thery.benoit@hotmail.fr">
            <img id="mail" src="/envelope-solid.svg" alt="Contacter par mail" />
          </a>
          <img src="/phone-solid.svg" onClick={() => setModalOpen(true)}/>
          <ModalComponent
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            tel="06 23 69 05 28"
          />
        </div>
      </div>
    </div>
    <div className="skills">
      <div>
        <img src='/React-icon.png' id="react"/>
        <h2>Formé à React</h2> 
        <ul>
          <li>Maîtrise des concepts de composants, props, hooks et états</li>
          <li>Formation JavaScript/TypeScript</li>
          <li>Volonté d'évolution vers le mobile : Flutter, PWA...</li>
          <li>Des bases en backend (Express, Node, MongoDB...)</li>
        </ul>
      </div>
      <div>
        <img src='SEO_logo.png' id="SEO"/>
        <h2>Excellent rédactionnel</h2> 
        <ul>
          <li>10 ans d'expérience comme rédacteur web</li>
          <li>Maîtrise de l'optimisation SEO rédactionnelle</li>
          <li>Excellent niveau de français</li>
          <li>Bon niveau d'anglais</li> 
        </ul>
      </div>
      <div>
        <img src='SoftSkills_logo.png' id="soft"/>
        <h2>Soft skills adaptés au travail d'équipe</h2>
        <ul>
          <li>Personnalité compréhensive et collaborative</li>
          <li>Flexibilité de travail</li>
          <li>Habitué au travail à distance</li>
          <li>Formé à la méthode Agile </li>
        </ul>
      </div>
    </div>
  </section>)
}

export default Profile