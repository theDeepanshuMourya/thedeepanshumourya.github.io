let intro = $('.intro')
let introStrips = $('.strip')
let introLines = $('.line')
let logo = $('.logo')
let pageTitle = $('.page__Title')
let pageElements = $('.page__content__element')
let socialMedia = $('.social-media')
let contact = $('.contact')

let tl = new TimelineMax()

tl
  // Lines coming down
  .staggerTo(introLines, 0.8, {height: '100%', ease: Power1.easeOut}, 0.2)
  // Remove bg color from the .intro div
  .to(intro, 0, {background: 'none'})
  // Srips lifting, negative value -0.2 so that they start from last to first
  .staggerTo(introStrips, 0.8, {height: 0, ease: Power1.easeOut}, -0.2)
  // Lines lifting, -=0.8 to start the animation at the same time as the previous one
  .staggerTo(introLines, 0.8, {height: 0, ease: Power1.easeOut}, -0.2, '-=0.8')
  // Page elements coming into view
  .staggerFrom(logo, 0.8, {x: -100 , opacity: 0, ease: Power1.easeOut}, 0.2)
  .staggerFrom(pageTitle, 0.8, {x: -100 , opacity: 0, ease: Power1.easeOut}, 0.2)
  .staggerFrom(pageElements, 0.8, {x: -100 , opacity: 0, ease: Power1.easeOut}, 0.2)
  .staggerFrom(contact, 0.8, {x: -100 , opacity: 0, ease: Power1.easeOut}, 0.2)
  .staggerFrom(socialMedia, 0.8, {x: -100 , opacity: 0, ease: Power1.easeOut}, 0.2)
