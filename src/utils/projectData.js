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
    name: "Gateway 2 Heritage",
    description:
      "An image licensing platform for small heritage museums in the UK.",
    stack:
      "ReactJS, React-Router, Styled-Components, Netlify Lambda Functions, Airtable, TravisCI, Codecov, Jest",
    url: "",
    gitUrl: "https://github.com/fac18/t4b-g2h",
    imgSrc: placeHolder
  },
  {
    name: "Reduce, Reuse, Recycle!",
    description:
      "A game app designed to teach kids about recycling and the environment.",
    stack:
      "ReactJS, React-Router, Styled-Components, PWA, TravisCI, Codecov, Jest, Netlify",
    url: "https://reduce-reuse-recycle.netlify.com",
    gitUrl: "https://github.com/fac18/recycling-game",
    imgSrc: rrr
  },
  {
    name: "The Game of Life",
    description:
      "A reworked version of the original 1860 'Game of Life' board game.",
    stack: "ReactJS, CSS, TravisCI, Jest, Netlify",
    url: "https://the-game-of-life-1860.netlify.com/",
    gitUrl: "https://github.com/fac18/reactweek-jb",
    imgSrc: gameOfLife
  },
  {
    name: "Prepper",
    description: "An apocolypse prepping hub with tips and advice.",
    stack:
      "ExpressJS, Handlebars, PostgreSQL, CSS, TravisCI, Tape, Supertest, Heroku",
    url: "https://jamarad.herokuapp.com/",
    gitUrl: "https://github.com/fac18/week8-denk",
    imgSrc: prepper
  },
  {
    name: "Sorting Hat",
    description:
      "A Harry Potter Sorting Hat app with database and authentication.",
    stack:
      "HTML, CSS, JavaScript, NodeJS, PostgreSQL, BCrypt, JSONWebToken, TravisCI, Tape, Supertest, Codecov, Heroku",
    url: "https://kgbj-week-7.herokuapp.com/",
    gitUrl: "https://github.com/fac18/kgbj-week-7",
    imgSrc: sortingHat
  },
  {
    name: "CryptoWatch",
    description: "A cryptocurrency converter app powered by Coin Gecko API.",
    stack:
      "HTML, CSS, JavaScript, NodeJS, Coin Gecko API, Tape, Supertest, TravisCI, Codecov, Heroku",
    url: "https://cryptowatch.herokuapp.com/",
    gitUrl: "https://github.com/fac18/week5-famk-backend-api",
    imgSrc: cryptoWatch
  },
  {
    name: "WTF: Where's the Food?",
    description: "Search for a country to reveal their national dish.",
    stack: "HTML, CSS, JavaScript, NodeJS, Tape, NYC, TravisCI, Heroku",
    url: "https://wtf-wheres-the-food.herokuapp.com/",
    gitUrl: "https://github.com/fac18/week4-cikp-autocomplete",
    imgSrc: wtf
  },
  {
    name: "Gifsthesia",
    description: "Guess the song title by analysing the gifs.",
    stack: "HTML, CSS, JavaScript, Tape, Giphy API, Musicmatch API",
    url: "https://fac18.github.io/week3-cikp-gifsthesia/",
    gitUrl: "https://github.com/jc2820/",
    imgSrc: gifsthesia
  },
  {
    name: "Calculator",
    description:
      "A vanilla JavaScript calculator made as pre-course work for Founders and Coders",
    stack: "HTML, CSS, JavaScript, Git",
    url: "https://jc2820.github.io/calculator/",
    gitUrl: "https://github.com/jc2820/calculator",
    imgSrc: calculator
  }
];

export default projectData;
