window.addEventListener('DOMContentLoaded', () => {
  console.log('hello world')

  // const projectTitle = document.querySelector('.project-header')
  const projectNav = document.querySelector('.project-titles')
  console.log(projectNav)

  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    // if (window.scrollY >= 753) {
    if (window.scrollY >= 829) {
      console.log('fix')
      // projectTitle.classList.add('fixed-title')
      projectNav.classList.add('fixed-nav')
    } else {
      console.log('unfix')
      // projectTitle.classList.remove('fixed-title')
      projectNav.classList.remove('fixed-nav')
    }
  })


}) // END OF SCRIPT