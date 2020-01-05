window.addEventListener('DOMContentLoaded', () => {
  console.log('script loaded')

  // // NAVBAR
  // const projectNav = document.querySelector('.project-titles')
  
  // // PROJECT CARDS
  // const startingTitles = document.querySelectorAll('.startingTitle')
  // const projectCards = document.querySelectorAll('.project-card')
  
  // NAV TITLES
  // const navTitles = document.querySelectorAll('.nav-title-underline')

  // LANDING UNDERLINE
  const landingUnderline = document.getElementById('landing-inner-line')
  // LANDING H3
  const landingH3 = document.querySelector('.landing-h3')
  // const landingText = document.querySelector('.landing-text')
  // const landingIcon = document.querySelectorAll('.landing-icon')
  // LANDING ARROW
  const landingArrow = document.querySelector('.arrow-wrapper')
  
  // ABOUT ICONS
  const icons = document.querySelectorAll('.tech-icon')

  let i = 0

  // LANDING PAGE FADEINS
  setTimeout(() => {
    const countTo100 = setInterval(() => {
      if (i >= 100) {
        clearInterval(countTo100)
      }
      if (i >= 90) {
        // landingText.classList.remove('hidden')
        // landingText.classList.add('fadeIn')
        // landingIcon[0].classList.remove('hidden')
        // landingIcon[0].classList.add('fadeIn')
        // landingIcon[1].classList.remove('hidden')
        // landingIcon[1].classList.add('fadeIn')
        landingArrow.classList.remove('hidden')
        landingArrow.classList.add('fadeIn')
      }
      if (i === 50) {
        landingH3.classList.remove('hidden')
        landingH3.classList.add('fadeIn')
      }
      if (i < 50) {
        i += 1
      } else if (i < 70) {
        i += 0.8
      } else if (i < 80) {
        i += 0.6
      } else i += 0.4
      landingUnderline.style.width = `${i}%`
    }, 15)
  }, 300)

  
  
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

    // SCROLL TRIGGERED ANIMATION
    
    // **** ABOUT ****
    const aboutImage = document.querySelector('.portrait-image')
    const aboutTechContainer = document.querySelector('.about-tech-container')
    const aboutArrow = document.querySelector('.about-arrow')
    const aboutText = document.querySelector('.about-text')

    if (pagePercentageScrolled > 0.59) {
      aboutImage.classList.remove('hidden')
      aboutImage.classList.add('fadeInLeft')

      aboutTechContainer.classList.remove('hidden')
      aboutTechContainer.classList.add('fadeInUp')

      aboutText.classList.remove('hidden')
      aboutText.classList.add('fadeIn')

      setTimeout(() => {
        aboutArrow.classList.remove('hidden')
        aboutArrow.classList.add('fadeIn')
      }, 500)
    }

    // PROJECT
    const projectContainerLeft = document.querySelector('.project-left-menu')
    const projectContainerRight = document.querySelector('.project-right-content')

    if (pagePercentageScrolled > 0.88) {
      projectContainerLeft.classList.remove('hidden')
      projectContainerLeft.classList.add('fadeIn')

      projectContainerRight.classList.remove('hidden')
      projectContainerRight.classList.add('fadeIn')
    }

    // // NAVBAR FIXED POSITION
    // if (pagePercentageScrolled >= 0.472) {
    //   projectNav.classList.add('fixed-nav')
    // } else {
    //   projectNav.classList.remove('fixed-nav')
    // }

    // // PROJECT CARD FADES
    // if (pagePercentageScrolled >= 0.44) {
    //   startingTitles[0].classList.add('fadeOut')
    //   setTimeout(() => {
    //     startingTitles[0].classList.add('hidden')
    //     projectCards[0].classList.remove('hidden')
    //     projectCards[0].classList.add('fadeIn')
    //   }, 400)
    // }
    // if (pagePercentageScrolled >= 0.60) {
    //   startingTitles[1].classList.add('fadeOut')
    //   setTimeout(() => {
    //     startingTitles[1].classList.add('hidden')
    //     projectCards[1].classList.remove('hidden')
    //     projectCards[1].classList.add('fadeIn')
    //   }, 400)
    // }
    // if (pagePercentageScrolled >= 0.80) {
    //   startingTitles[2].classList.add('fadeOut')
    //   setTimeout(() => {
    //     startingTitles[2].classList.add('hidden')
    //     projectCards[2].classList.remove('hidden')
    //     projectCards[2].classList.add('fadeIn')
    //   }, 400)
    // }
    // if (pagePercentageScrolled >= 0.96) {
    //   startingTitles[3].classList.add('fadeOut')
    //   setTimeout(() => {
    //     startingTitles[3].classList.add('hidden')
    //     projectCards[3].classList.remove('hidden')
    //     projectCards[3].classList.add('fadeIn')
    //   }, 400)
    // }

    // //NAV TITLE COLORS
    // switch (true) {
    //   case pagePercentageScrolled > 0.40 && pagePercentageScrolled < 0.60:
    //     removeWhiteClasses()
    //     navTitles[0].classList.add('white')
    //     break
    //   case pagePercentageScrolled > 0.60 && pagePercentageScrolled < 0.78:
    //     removeWhiteClasses()
    //     navTitles[1].classList.add('white')
    //     break
    //   case pagePercentageScrolled > 0.78 && pagePercentageScrolled < 0.97:
    //     removeWhiteClasses()
    //     navTitles[2].classList.add('white')
    //     break
    //   case pagePercentageScrolled > 0.97:
    //     removeWhiteClasses()
    //     navTitles[3].classList.add('white')
    //     break
    //   default:
    //     removeWhiteClasses()

    // }

    // // ICON HOVER COLOR
    // icons.forEach(icon => {
    //   icon.addEventListener('mouseover', () => {
    //     icon.classList.add('colored')
    //   })
    //   icon.addEventListener('mouseout', () => {
    //     icon.classList.remove('colored')
    //   })
    // })

    // Carousel
    // PROJECT CARDS
    const projectCards = document.querySelectorAll('.project-content')
    // ARROWS
    const arrowLeft = document.querySelector('.project-arrow-left')
    const arrowRight = document.querySelector('.project-arrow-right')

    // NAV TITLES
    const projectNavTitles = document.querySelectorAll('.project-title-name')

    // CAROUSEL SLIDE NUMBER
    let currentSlide = 0
    projectNavTitles[currentSlide].classList.add('color-red')
    
    // ADDING CLICK
    arrowRight.addEventListener('click', () => {
      projectCards[currentSlide].classList.add('hidden')
      if (currentSlide === projectCards.length - 1) currentSlide = 0
      else currentSlide++
      projectCards[currentSlide].classList.remove('hidden')
      removeColorRed()
      projectNavTitles[currentSlide].classList.add('color-red')
      return currentSlide
    })
    arrowLeft.addEventListener('click', () => {
      projectCards[currentSlide].classList.add('hidden')
      if (currentSlide === 0) currentSlide = projectCards.length - 1
      else currentSlide--
      projectCards[currentSlide].classList.remove('hidden')
      removeColorRed()
      projectNavTitles[currentSlide].classList.add('color-red')
      return currentSlide
    })
    // REMOVING COLORS FROM NAV TITLES
    function removeColorRed() {
      projectNavTitles.forEach(title => title.classList.remove('color-red'))
    }
    // NAV CLICK
    projectNavTitles.forEach(title => {
      title.addEventListener('click', () => {
        removeColorRed()
        title.classList.add('color-red')

        projectCards.forEach(card => {
          if (card.id === title.id) {
            projectCards[currentSlide].classList.add('hidden')
            currentSlide = Array.from(projectCards).indexOf(card)
            projectCards[currentSlide].classList.remove('hidden')
            return currentSlide
          }
        })
      })
      return currentSlide
    })

    // BOUNCING ABOUT PAGE ICONS
    const aboutIcons = document.querySelectorAll('.about-icon')
    // console.log(aboutIcons)

    aboutIcons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
        icon.classList.add('colored')
        icon.classList.add('bounce')
        setTimeout(() => {
          icon.classList.remove('bounce')
          icon.classList.remove('colored')
        }, 1000)
      })
    })

  }) // END OF SCROLL EVENT LISTENER

  // function removeWhiteClasses() {
  //   navTitles[0].classList.remove('white')
  //   navTitles[1].classList.remove('white')
  //   navTitles[2].classList.remove('white')
  //   navTitles[3].classList.remove('white')
  // }

}) // END OF SCRIPT