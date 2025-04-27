function display (e) {
  const allSitesProperties = document.querySelectorAll(".panel")
  allSitesProperties.forEach((i) => i.style.display="none")

  document.getElementById(e).style.display="grid"
}

export default display