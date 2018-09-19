# Webutvikling (IT2810) - gruppe 27

## Installation and start
This project requires **node.js v.10.9.0** and **npm v.6.4.1**

To install dependencies and run project, go to your terminal and navigate to project folder and run these commands.
```sh
$ npm install
$ npm start
```
## Content and functionality
One of the requirements is to manually cache the files and not rely on the browser-caching, 
to accomplish this we stored the data retrieved by AJAX in the application state. We decided to use
the Fetch API instead of a third party API such as Axiom, as we felt that Fetch was sufficient for
our use in this project. 

We chose to have a single component `Art` that changes based on the chosen tab and categories instead of one component per tab. 

We chose to use CSS Grid as a means of organizing the web page as it is a powerful tool of organising in two dimensions
and is supported by all modern browsers.


## Technology
We have followed all the requirements given in the assignment: 
* **React** 
    * We have used React and JSX
    * We have used ES6 with classes and a component structure.
    * We have only used vanilla React, no external libraries 
* **AJAX**
    * We have used SVG for the pictures, MP3 for the audio files and JSON for the text files.
    * We use AJAX along with the Fetch API to dynamically and asynchronously load data (images, sounds and texts).
    * We used HTML5 `<audio>`-tag for sound, but AJAX to load the sound.
* **Responsive Web Design**
    * The web page adapts to screen size and orientation, we move elements inside of the art when size gets smaller,
     and we change the look of the art, tabs and radio buttons when the page is to small (often on smaller phone screens). 
    * We use CSS Grid and the `grid-template-areas`-attribute to organize the elements of the web page. 
    * We use media queries to reorganize elements as the screen gets smaller. 
    * We have only used vanilla CSS. 
* **Git**
    * We have commented and documented the code base, and we have structured the code based on React-guides on the web. 
    E.g.: we have a separate `components`-directory which contains all our components used in our main `App`-component
    * We have used Git as version control, and have divided tasks into issues on GitHub. Each issue have separate 
    commits connected to them through comments on the respective commits.
    * We have created a web server where the project is uploaded to and can be accessed through <a href="http://it2810-27.idi.ntnu.no/prosjekt2">this link</a>

## Testing
We have tested the page on different 
* desktops (Mac and PC) using different browsers
    * Safari 11
    * Chrome 69 
    * Firefox 62 
* phones
    * iPhone 7 (Safari)
    * Google Nexus 5X (Chrome)
    * Huawei P10 (Chrome). 

We checked that choosing a category and switching between tabs resulted in different
artworks, and that the functionality was as expected in all devices and browsers when resizing and changing
the orientation. 





