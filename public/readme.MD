# our2050.world 



## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
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

Throughout this project, there were many challenges and learning oppotunities! I have listed some of the key learning points below.

HTML: 
- Responsive `Hero image` container: 
                - I had to set an `srcset` of various image sizes in order to ensure the browser selects the correct size image for the device being used. This helps avoid using a larger image than is required. 

- Using <a> tags:
                - to jump from the Nav bar to a particular selected section on the page. 
                - return to top of page (using smooth scroll)
- Addded Links to external websites and to email address of BSI.

I built the language dropdown menu using html instead of JavaScript due to the timeframe and stage of learning I am currently at. This was one of the most challenging but rewarding parts of this project. I built this using a 


    ```html
      <div class="social-container">
                    <div class="left">
                        <div class="number-followers">80k</div>
                        <div class="followers">Followers</div>
                    </div>
                    <div class="middle">
                        <div class="number-likes">803K</div>
                        <div class="likes">Likes</div>
                    </div>
                    <div class="right">
                        <div class="number-photos">1.4k</div>
                        <div class="photos">Photos</div>
    ```
  
    - how to create the rounding edges of the profile card
    - how to create the round profile picture using border-radius and placing a border around this 
    - then position this half way between two containers 
    See code here:
    ```css
    .profile-picture {
    display: flex;
    border-radius: 50%;
    overflow: hidden;
    border: 6px solid white;
    margin-top: -50px; 
    }
    ```

### Continued development

- continuing practice of flexbox and positioning 
- importing images and positioning of them (in particular background position when there is multiple images)
- embedding different webfonts 


### Useful resources

- [https://www.w3schools.com/css/css3_backgrounds.asp](https://www.w3schools.com/css/css3_backgrounds.asp) - This heleped with some of the positioning with the background images, however I still struggled with having multiple images stacked on top of each other.


## Author

- Frontend Mentor - [@becmorrell](https://www.frontendmentor.io/profile/becmorrell)
