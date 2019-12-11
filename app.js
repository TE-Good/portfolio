window.addEventListener('DOMContentLoaded', () => {
  console.log('script loaded')

  // NAVBAR
  const projectNav = document.querySelector('.project-titles')
  
  // PROJECT CARDS
  const startingTitles = document.querySelectorAll('.startingTitle')
  const projectCards = document.querySelectorAll('.project-card')
  
  // NAV TITLES
  const navTitles = document.querySelectorAll('.nav-title-underline')

  // LANDING UNDERLINE
  const landingUnderline = document.getElementById('landing-inner-line')
  // LANDING H3
  const landingH3 = document.querySelector('.landing-h3')
  const landingText = document.querySelector('.landing-text')
  const landingIcon = document.querySelectorAll('.landing-icon')

  // for (let i = 0; i < 100; i++) {
  //   console.log(i)
  //   setTimeout(() => {
  //     i += 1
  //   }, 1000)
  // }
  let i = 0
  const countTo100 = setInterval(() => {
    console.log(i)
    if (i === 100) {
      clearInterval(countTo100)
      landingText.classList.remove('hidden')
      landingText.classList.add('fadeIn')
      landingIcon[0].classList.remove('hidden')
      landingIcon[0].classList.add('fadeIn')
      landingIcon[1].classList.remove('hidden')
      landingIcon[1].classList.add('fadeIn')
    }
    if (i === 50) {
      landingH3.classList.remove('hidden')
      landingH3.classList.add('fadeIn')
    }
    i += 1
    landingUnderline.style.width = `${i}%`
  }, 15)

  
  
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
    // console.log('page percentage:', pagePercentageScrolled)

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
    switch (true) {
      case pagePercentageScrolled > 0.40 && pagePercentageScrolled < 0.60:
        removeWhiteClasses()
        navTitles[0].classList.add('white')
        break
      case pagePercentageScrolled > 0.60 && pagePercentageScrolled < 0.78:
        removeWhiteClasses()
        navTitles[1].classList.add('white')
        break
      case pagePercentageScrolled > 0.78 && pagePercentageScrolled < 0.97:
        removeWhiteClasses()
        navTitles[2].classList.add('white')
        break
      case pagePercentageScrolled > 0.97:
        removeWhiteClasses()
        navTitles[3].classList.add('white')
        break
      default:
        removeWhiteClasses()

    }

  }) // END OF SCROLL EVENT LISTENER

  function removeWhiteClasses() {
    navTitles[0].classList.remove('white')
    navTitles[1].classList.remove('white')
    navTitles[2].classList.remove('white')
    navTitles[3].classList.remove('white')
  }

}) // END OF SCRIPT