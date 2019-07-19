import { createContext } from 'react'

const ChoresContext = createContext({

  //useRef functions
  choreName: _ => {},
  chorePoints: _ => {},
  choreStartTime: _ => {},
  choreDueTime: _ => {},
  childName: _ => {},

  //userRef for registration
  userName: _ => {},
  userEmail: _ => {},
  userPassword: _ => {},
  //userRef for login
  _userName: _ => {},
  _userPassword: _ => {},


  //Child and chore variables
  chore: {},
  choresArr: [],
  child: {},
  childArr: [],
  task: '',
  points: 0,
  isCompleted: false,
  startDate: new Date(),
  dueDate: new Date (),

  //Functions that will hit the routes
  addChild: _ => {},
  getOneChild: _ => {},
  getAllChildren: _ => {},
  addChore: _ => {},
  getOneChore: _ => {},
  getAllChores: _ => {},
  deleteChore: _ => {},
  updateChore: _ => {},

  registerUser: _ => {},
  loginUser: _ => {},
  logoutUser: _ => {},

  //user login tracking variables. Token will be saved in localStorage
  user: '',
  isLoggedIn: false,
})

export default ChoresContext