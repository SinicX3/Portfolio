function Profile () {

  return(
  <section id="profile_section" className="panel" >
    <div className="profile">
      <img src="/IMG_9743.jpg" id="photo"/>
      <div className="text">
        <h1>Développeur frontend</h1>
        <p>Formé à JavaScript, avec un intérêt prononcé pour React, je développe des interfaces intuitives et agréables.</p> 
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