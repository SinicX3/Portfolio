function display (e) {
  const allSitesProperties = document.querySelectorAll(".panel")
  console.log(allSitesProperties)
  allSitesProperties.forEach((i) => i.style.display="none")

  document.getElementById(e).style.display="initial"
}

export default display