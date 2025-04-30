import React, {useState} from "react"
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function Profile () {

  let subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00'
  }

  function closeModal() {
    setIsOpen(false);
  }

  return(
  <section id="profile_section" className="panel" >
    <div className="profile">
      <img src="/IMG_9743.jpg" id="photo"/>
      <div className="text">
        <h1>Développeur frontend</h1>
        <p>Formé à JavaScript, avec un intérêt prononcé pour React, je développe des interfaces intuitives et agréables.</p>
        <div id="contact">
          <a href="mailto:thery.benoit@hotmail.fr">
            <img id="mail" src="/envelope-solid.svg" alt="Contacter par mail" />
          </a>
          <img src="/phone-solid.svg" onClick={openModal}/>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          ><p>06 23 69 05 28</p>
          </Modal>
        </div>
      </div>
    </div>
    <div className="skills">
      <div>
        <img src='/React-icon.png' id="react"/>
        <h2>Formé à React</h2> 
        <ul>
          <li>Maîtrise des concepts de composants, props, hooks et états</li>
          <li>Egalement des bases en backend (Express, Node, MongoDB...)</li>
        </ul>
      </div>
      <div>
        <img src='SEO_logo.png' id="SEO"/>
        <h2>Excellent rédactionnel</h2> 
        <ul>
          <li>10 ans d'expérience comme rédacteur web</li>
          <li>Excellent niveau de français</li>
          <li>Bon niveau d'anglais</li> 
          <li>Expérience du SEO</li>
        </ul>
      </div>
      <div>
        <img src='SoftSkills_logo.png' id="soft"/>
        <h2>Soft skills adaptés au travail d'équipe</h2>
        <ul>
          <li>Profil enthousiaste et collaboratif</li>
          <li>Flexibilité de travail</li>
        </ul>
      </div>
    </div>
  </section>)
}

export default Profile