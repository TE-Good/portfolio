window.addEventListener('DOMContentLoaded', () => {
  console.log('hello world')

  // const projectTitle = document.querySelector('.project1')
  const projectNav = document.querySelector('.project-titles')


  const websiteHeight = document.querySelector('body').scrollHeight
  console.log(websiteHeight)
  const scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
  )
  
  // targetting cards
  const startingTitles = document.querySelectorAll('.startingTitle')
  const projectCards = document.querySelectorAll('.project-card')
  console.log(startingTitles)
  
  startingTitles[0].classList.remove('hidden')
  projectCards[0].classList.add('hidden')
  
  window.addEventListener('scroll', () => {
    const pagePercentageScrolled = (window.scrollY + document.body.offsetHeight) / scrollHeight
    // console.log(window.pageYOffset)
    console.log(pagePercentageScrolled)
    // console.log(window.scrollY)
    // if (window.scrollY >= 753) {
    // NAVBAR FIXED POSITION
    if (window.scrollY >= 829) {
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
  })


}) // END OF SCRIPT