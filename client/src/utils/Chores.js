import axios from 'axios'

const Chores = {
  getAllChildren: _ => axios.get(`/${localStorage.getItem('user')}/children`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  getOneChild: id => axios.get(`/children/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  addManyChildren: children => axios.post('/children', children, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  updateChild: (id, child) => axios.put(`/children/${id}`, child, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),

  getAllChores: _ => axios.get('/chores', {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  getOneChore: id => axios.get(`/chores/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  addChore: chore => axios.post('/chores', chore, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  updateChore: (id, chore) => axios.put(`/chores/${id}`, chore, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  deleteChore: id => axios.delete(`/chores/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),

  updateBonusChore: (id, bonusChore) => axios.put(`/bonuschores/${id}`, bonusChore, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),

  addUser: user => axios.post('/register', user),

  loginUser: user => axios.post('/login', user),

  verifyUser: _ => axios.post('/verify', {}, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),

  getAllRewards: _ => axios.get('/rewards', {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  getOneReward: id => axios.get(`/rewards/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  addReward: reward => axios.post('/rewards', reward, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  updateReward: (id, reward) => axios.put(`/rewards/${id}`, reward, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  deleteReward: id => axios.delete(`/rewards/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  })

}

export default Chores
