import cryptoWatch from "../assets/screengrabs/cryptowatch.png";
import gameOfLife from "../assets/screengrabs/gameoflife.png";
import gifsthesia from "../assets/screengrabs/gifsthesia.png";
import prepper from "../assets/screengrabs/prepper.png";
import rrr from "../assets/screengrabs/rrr.png";
import sortingHat from "../assets/screengrabs/sortinghat.png";
import wtf from "../assets/screengrabs/wtf.png";
import placeHolder from "../assets/screengrabs/placeholder.png";
import calculator from "../assets/screengrabs/calculator.png";

const projectData = [
  {
    name: "Gateway2Heritage",
    description:
      "An image licensing platform for small heritage and cultural museums in the UK. Made as part of the Tech for Better programme at Founders and Coders",
    stack:
      "ReactJS, React-Router, Styled-Components, Netlify Lambda Functions, Airtable, TravisCI, Codecov, Jest",
    url: "",
    gitUrl: "https://github.com/fac18/t4b-g2h",
    imgAlt: "A Screengrab of the Gateway2Heritage page",
    imgSrc: placeHolder
  },
  {
    name: "Reduce, Reuse, Recycle!",
    description:
      "A drag-and-drop game designed to teach kids about recycling and the environment. Made as a student picked project and introduction to prototyping and scrum methodology",
    stack:
      "ReactJS, React-Router, Styled-Components, Drag and Drop with touch support, PWA, TravisCI, Codecov, Jest, Netlify",
    url: "https://reduce-reuse-recycle.netlify.com",
    gitUrl: "https://github.com/jc2820/recycling-game",
    imgAlt: "A Screengrab of the Reduce, Reuse, Recycle! game screen",
    imgSrc: rrr
  },
  {
    name: "The Game of Life",
    description:
      "A reworked version of the original 1860 'Game of Life' boardgame. Made as an introduction to the React framework",
    stack: "ReactJS, CSS, TravisCI, Jest, Netlify",
    url: "https://the-game-of-life-1860.netlify.com/",
    gitUrl: "https://github.com/jc2820/reactweek-jb",
    imgAlt: "A Screengrab of The Game of Life board game page",
    imgSrc: gameOfLife
  },
  {
    name: "Prepper",
    description:
      "An apocolypse prepping hub where preppers can post and see tips and advice for a range of apocolypses. Made with express and Handlebars.",
    stack:
      "ExpressJS, Handlebars, PostgreSQL, CSS, TravisCI, Tape, Supertest, Heroku",
    url: "https://jamarad.herokuapp.com/",
    gitUrl: "https://github.com/jc2820/week8-denk",
    imgAlt: "A Screengrab of the Prepper 'biblical preps' page",
    imgSrc: prepper
  },
  {
    name: "Sorting Hat",
    description:
      "A Harry Potter Sorting Hat app with PostgreSQL database, authentication and cookies.",
    stack:
      "HTML, CSS, JavaScript, NodeJS, PostgreSQL, BCrypt, JSONWebToken, TravisCI, Tape, Supertest, Codecov, Heroku",
    url: "https://kgbj-week-7.herokuapp.com/",
    gitUrl: "https://github.com/jc2820/kgbj-week-7",
    imgAlt: "A Screengrab of the Sorting Hat registration form page",
    imgSrc: sortingHat
  },
  {
    name: "CryptoWatch",
    description: "A cryptocurrency converter app powered by Coin Gecko API.",
    stack:
      "HTML, CSS, JavaScript, NodeJS, Coin Gecko API, Tape, Supertest, TravisCI, Codecov, Heroku",
    url: "https://cryptowatch.herokuapp.com/",
    gitUrl: "https://github.com/jc2820/week5-famk-backend-api",
    imgAlt: "A Screengrab of the Cryptowatch app",
    imgSrc: cryptoWatch
  },
  {
    name: "WTF: Where's the Food?",
    description:
      "Pick a country in the autocomplete search bar to reveal their national dish.",
    stack: "HTML, CSS, JavaScript, NodeJS, Tape, NYC, TravisCI, Heroku",
    url: "https://wtf-wheres-the-food.herokuapp.com/",
    gitUrl: "https://github.com/jc2820/week4-cikp-autocomplete",
    imgAlt: "A Screengrab of the WTF: Where's the food app",
    imgSrc: wtf
  },
  {
    name: "Gifsthesia",
    description:
      "Guess the song title by analysing the gifs. An introduction to working with APIs",
    stack: "HTML, CSS, JavaScript, Tape, Giphy API, Musicmatch API",
    url: "https://fac18.github.io/week3-cikp-gifsthesia/",
    gitUrl: "https://github.com/jc2820/week3-cikp-gifsthesia",
    imgAlt: "A Screengrab of the Gifsthesia app",
    imgSrc: gifsthesia
  },
  {
    name: "Calculator",
    description:
      "A vanilla JavaScript calculator made as pre-course work for Founders and Coders",
    stack: "HTML, CSS, JavaScript, Git",
    url: "https://jc2820.github.io/calculator/",
    gitUrl: "https://github.com/jc2820/calculator",
    imgAlt: "A Screengrab of my calculator app",
    imgSrc: calculator
  }
];

export default projectData;
