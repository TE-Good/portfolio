window.addEventListener('DOMContentLoaded', () => {
  console.log('script loaded')

  // NAVBAR
  const projectNav = document.querySelector('.project-titles')
  
  // PROJECT CARDS
  const startingTitles = document.querySelectorAll('.startingTitle')
  const projectCards = document.querySelectorAll('.project-card')
  
  // NAV TITLES
  const navTitles = document.querySelectorAll('.project-nav-title')
  console.log(navTitles)
  
  
  // FINDING MAX HEIGHT OF ANY BROWSER
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )
  
  window.addEventListener('scroll', () => {
    const pagePercentageScrolled = Number(((window.scrollY + document.body.offsetHeight) / scrollHeight).toFixed(3))
    // console.log(window.pageYOffset)
    // console.log(window.scrollY)
    console.log('page percentage:', pagePercentageScrolled)

    // NAVBAR FIXED POSITION
    if (pagePercentageScrolled >= 0.472) {
      projectNav.classList.add('fixed-nav')
    } else {
      projectNav.classList.remove('fixed-nav')
    }

    // PROJECT CARD FADES
    if (pagePercentageScrolled >= 0.44) {
      startingTitles[0].classList.add('fadeOut')
      setTimeout(() => {
        startingTitles[0].classList.add('hidden')
        projectCards[0].classList.remove('hidden')
        projectCards[0].classList.add('fadeIn')
      }, 400)
    }
    if (pagePercentageScrolled >= 0.60) {
      startingTitles[1].classList.add('fadeOut')
      setTimeout(() => {
        startingTitles[1].classList.add('hidden')
        projectCards[1].classList.remove('hidden')
        projectCards[1].classList.add('fadeIn')
      }, 400)
    }
    if (pagePercentageScrolled >= 0.80) {
      startingTitles[2].classList.add('fadeOut')
      setTimeout(() => {
        startingTitles[2].classList.add('hidden')
        projectCards[2].classList.remove('hidden')
        projectCards[2].classList.add('fadeIn')
      }, 400)
    }
    if (pagePercentageScrolled >= 0.96) {
      startingTitles[3].classList.add('fadeOut')
      setTimeout(() => {
        startingTitles[3].classList.add('hidden')
        projectCards[3].classList.remove('hidden')
        projectCards[3].classList.add('fadeIn')
      }, 400)
    }

    //NAV TITLE COLORS
    switch (pagePercentageScrolled) {
      case 0.40:
        navTitles[0].classList.add('white')
        // break;
    }

  })


}) // END OF SCRIPT