import { createContext } from 'react'

const ChoresContext = createContext({
  choreName: _ => {},
  chorePoints: _ => {},
  choreStartTime: _ => {},
  choreDueTime: _ => {},
  chore: {},
  choresArr: [],
  child: {},
  childArr: [],
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
  logoutUser: _ => {}
})

export default ChoresContext