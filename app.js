window.addEventListener('DOMContentLoaded', () => {
  // console.log('script loaded')


  // *** LANDING PAGE ANIMATIONS ***
  // LANDING UNDERLINE
  const landingUnderline = document.getElementById('landing-inner-line')
  // LANDING H3
  const landingH3 = document.querySelector('.landing-h3')
  // LANDING ARROW
  const landingArrow = document.querySelector('.arrow-wrapper')

  let i = 0

  // LANDING PAGE FADEINS
  setTimeout(() => {
    const countTo100 = setInterval(() => {
      if (i >= 100) {
        clearInterval(countTo100)
      }
      if (i >= 90) {
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

  // SCROLL TRIGGERED ANIMATION
  window.addEventListener('scroll', () => {
    const pagePercentageScrolled = Number(((window.scrollY + document.body.offsetHeight) / scrollHeight).toFixed(3))
    // console.log(window.pageYOffset)
    // console.log(window.scrollY)
    // console.log('page percentage:', pagePercentageScrolled)


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

    // **** PROJECT ****
    const projectContainerLeft = document.querySelector('.project-left-menu')
    const projectContainerRight = document.querySelector('.project-right-content')

    if (pagePercentageScrolled > 0.88) {
      projectContainerLeft.classList.remove('hidden')
      projectContainerLeft.classList.add('fadeIn')

      projectContainerRight.classList.remove('hidden')
      projectContainerRight.classList.add('fadeIn')
    }

  }) // END OF SCROLL EVENT LISTENER

  // CAROUSEL
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

}) // END OF SCRIPT


// *****NOTES*****

// GENERAL
// MAY WANT DIVIDERS BETWEEN THE SECTIONS TO BREAK IT UP

// LANDING
// HAVE GREY LINES ABOVE AND BELOW OF LIKE 10VH OR SOMETHING TO BREAK UP THE PAGE? 
// ON ARROW CLICK MADE ALL OF LANDING PAGE FADE AWAY BUT HAVE IT REAPPEAR IF YOU SCROLL UP TO IT

// ABOUT
// HAVE ALL DEV ICONS FADE UP FROM THE RED LINE ONE AFTER ANOTHER LIKE A WAVE

// PROJECTS
// ADD SWIPING LOOK INTO IMAGES MOVING
// HAVE THE GREY BEHIND FADE IN ONCE WE ARE IN FOCUS - REMOVE IT WHEN SCROLLING AWAY - IT SHOULD GET DARK AS YOUR SCROLL TOWARDS, LIGHTER AS YOU SCROLL AWAY