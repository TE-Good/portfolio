window.addEventListener('DOMContentLoaded', () => {
  console.log('hello world')

  // const projectTitle = document.querySelector('.project1')
  const projectNav = document.querySelector('.project-titles')

  // targetting cards
  const startingTitles = document.querySelectorAll('.startingTitle')
  const projectCards = document.querySelectorAll('.project-card')
  console.log(startingTitles)

  startingTitles[0].classList.remove('hidden')
  projectCards[0].classList.add('hidden')

  window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    // if (window.scrollY >= 753) {
    if (window.scrollY >= 829) {
      // console.log('fix')
      // projectTitle.classList.add('fixed-title')
      projectNav.classList.add('fixed-nav')
    } else {
      // console.log('unfix')
      // projectTitle.classList.remove('fixed-title')
      projectNav.classList.remove('fixed-nav')
    }
    if (window.scrollY >= 674) {
      startingTitles[0].classList.add('fadeOut')
      setTimeout(() => {
        startingTitles[0].classList.add('hidden')
        projectCards[0].classList.remove('hidden')
        projectCards[0].classList.add('fadeIn')
      }, 400)
    }
    if (window.scrollY >= 1300) {
      startingTitles[1].classList.add('fadeOut')
      setTimeout(() => {
        startingTitles[1].classList.add('hidden')
        projectCards[1].classList.remove('hidden')
        projectCards[1].classList.add('fadeIn')
      }, 400)
    }
    if (window.scrollY >= 1900) {
      startingTitles[2].classList.add('fadeOut')
      setTimeout(() => {
        startingTitles[2].classList.add('hidden')
        projectCards[2].classList.remove('hidden')
        projectCards[2].classList.add('fadeIn')
      }, 400)
    }
    if (window.scrollY >= 2500) {
      startingTitles[3].classList.add('fadeOut')
      setTimeout(() => {
        startingTitles[3].classList.add('hidden')
        projectCards[3].classList.remove('hidden')
        projectCards[3].classList.add('fadeIn')
      }, 400)
    }
  })


}) // END OF SCRIPT