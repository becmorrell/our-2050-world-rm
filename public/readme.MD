# our2050.world 



## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - []
  - [Challenges](#challenges)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview


### Links

- Solution URL: [https://github.com/becmorrell/frontend-mentor/tree/main/profile-card](https://github.com/becmorrell/frontend-mentor/tree/main/profile-card)
- Live Site URL: [https://our2050.world/](https://our2050.world/)

## My process

### Built with

- Semantic HTML5 markup
- CSS 
- JavaScript

### Frameworks, Libraries and Programmes used

- Figma: 
- Google Fonts:
- Git 
- Github 
- JQuery


### Challenges 🧠

Throughout this project, there were many challenges and learning oppotunities I encountered! I have listed some of the key learning points below.

HTML: 
- Responsive `Hero image` container: 
                - I had to set an `srcset` of various image sizes in order to ensure the browser selects the correct size image for the device being used. This helps avoid using a larger image than is required. 

- Using <a> tags:
                - to jump from the Nav bar to a particular selected section on the page. 
                - return to top of page (using smooth scroll)
- Addded Links to external websites and to email address of BSI.

I built the language dropdown menu using html instead of JavaScript due to the timeframe and stage of learning I am currently at. This was one of the most challenging but rewarding parts of this project. I built this using a 


CSS: 
- Using variables to set colors throughout the page:
                                - for ease of changing colors if requested by the client 
                                - readability and reusability throughout the CSS 

- Hover states on the Nav bar:
                        - I placed the <a> tag on the `li` item 
                        - Used a box-shadow with y-offset (transparent in its default state)
                        - transitioned this to the required color over 0.2s on hover 

- Adding <img> of country flag for selected language:
                                    - for active state, background-image used for selected country 

- Add [rtl] language direction:
                        - required styling in CSS to support this throughout page (padding / margins to altered)

- Responsive layout for tablet/desktop versions:
                                    - when making the media queries for the desktop version, I found the 'hero image' difficult to position and define the correct size. This was due to the image becoming too large/wide as the page grows.
                                    - I found using the width: calc( 100% - 60px) the easiest way to define the size of the image. 

- Animation of Windmill: 
                        - I added a little animation on the sustainable windmill image!
                        - I seperated the windmill wings and added a transiition and rotation on them as a hover state    


### Continued development

- continuing practice of flexbox and positioning 
- importing images and positioning of them (in particular background position when there is multiple images)
- embedding different webfonts 


### Useful resources

- [https://www.w3schools.com/css/css3_backgrounds.asp](https://www.w3schools.com/css/css3_backgrounds.asp) - This heleped with some of the positioning with the background images, however I still struggled with having multiple images stacked on top of each other.


## Author

- Frontend Mentor - [@becmorrell](https://www.frontendmentor.io/profile/becmorrell)
