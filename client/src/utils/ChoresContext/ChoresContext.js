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


  handleInputChange: _ => { },


  //Child and chore variables
  chore: {},
  choresArr: [],
  child: {},
  childArr: [],
  reward: {},
  rewardsArr: [],
  claimedRewardsArr: [],
  choreName: '',
  cheddarReward: Number,
  rewardName: '',
  rewardAmount: Number,

  addChildren: _ => {},
  selectChild: _ => {},
  addChore: _ => {},

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

})

export default ChoresContext