import { createContext } from 'react'

const ChoresContext = createContext({

  //mock data
  squad: [],

  //useRef functions
  choreName: _ => { },
  chorePoints: _ => { },
  choreStartTime: _ => { },
  choreDueTime: _ => { },
  childName: _ => { },

  //userRef for registration
  // name: _ => {},
  // userName: _ => {},
  // userEmail: _ => {},
  // userPassword: _ => {},
  // //userRef for login
  // _userName: _ => {},
  // _userPassword: _ => {},

  handleInputChange: _ => { },


  //Child and chore variables
  chore: {},
  choresArr: [],
  child: {},
  childArr: [],
  reward: {},
  rewardsArr: [],
  choreName: '',
  cheddarReward: Number,

  addChildren: _ => {},
  selectChild: _ => {},

  handleInputChange: _ => {},

  registerUser: _ => {},
  loginUser: _ => {},


  //user login tracking variables. Token will be saved in localStorage
  name: '',
  userName: '',
  email: '',
  password: '',
  _userName: '',
  _userPassword: '',
  isLoggedIn: false,

  numOfChildren: 1
})

export default ChoresContext