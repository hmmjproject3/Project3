import { createContext } from 'react'

const ChartContext = createContext({

  // useRef functions
  choreName: _ => { },
  chorePoints: _ => { },
  choreStartTime: _ => { },
  choreDueTime: _ => { },
  childName: _ => { },

  // Child and chore variables
  chore: {},
  choresArr: [],
  child: {},
  childArr: [],
  task: '',
  points: 0,
  isCompleted: false,
  startDate: new Date(),
  dueDate: new Date(),

  // Functions that will hit the routes
  getOneChild: _ => { },
  getAllChildren: _ => { },
  getOneChore: _ => { },
  getAllChores: _ => { }

})

export default ChartContext
