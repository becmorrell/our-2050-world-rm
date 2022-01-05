# our2050.world 

Following a project for a client, I have written a short reflection of the process I used and learning I gained from this.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Frameworks, Libraries and Programmes used](#frameworks-libraries-and-programmes-used)
  - [Design](#design)
  - [Challenges](#challenges)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview


### Links

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

### Design

The Designer on the project provided the following wireframes to work from: 

Mobile | Tablet      |       Desktop       |
:-----:| :---------: | :---------------: |
<img width="100" alt="Screenshot 2022-01-05 at 16 40 19" src="https://user-images.githubusercontent.com/77584099/148256083-093b0129-574a-430d-921e-2f2888d0ef0c.png"> |
<img width="300" alt="Screenshot 2022-01-05 at 16 40 19 copy" src="https://user-images.githubusercontent.com/77584099/148256187-d92ca996-38c3-4b33-8f79-be3d694fef1a.png">|
<img width="600" alt="Screenshot 2022-01-05 at 16 41 46" src="https://user-images.githubusercontent.com/77584099/148256201-0163d80d-7f4c-41ed-ad2c-acccc3f30da9.png"> |


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


JavaScript: 
- Copy to clipboard: 
                - snackbar is always present (z-index: 1, visibility is hidden)
                - when clipboard function runs = `show`
                - timesout after 3 seconds (by replacing `show` with "")

- Language change: 
                - Language dropdown() = find first child within dropdown list to hide (avoiding repeating language  option)
                - added event listener to dropdown (click anywhere else but dropdown to close / remove active class)

- Firebase to override cookie for language change
 


### Useful resources

- [https://www.w3schools.com/css/css3_backgrounds.asp](https://www.w3schools.com/css/css3_backgrounds.asp) 
- [https://stackoverflow.com](https://stackoverflow.com)


## Author

Rebecca Morrell [https://www.linkedin.com/in/beccamorrell/](https://www.linkedin.com/in/beccamorrell/)
