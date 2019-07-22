import axios from 'axios'

const Chores = {
  getAllChildren: _ => axios.get('/children', {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  getOneChild: id => axios.get(`/children/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  addManyChildren: children => axios.post('/children', {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }, children),
  updateChild: (id, child) => axios.put(`/children/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }, child),
  getAllChores: _ => axios.get('/chores', {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  getOneChore: id => axios.get(`/chores/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  addChore: chore => axios.post('/chores', {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }, chore),
  updateChore: (id, chore) => axios.put(`/chores/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }, chore),
  deleteChore: id => axios.delete(`/chores/${id}`, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  }),
  
  addUser: user => axios.post('/register', user),

  loginUser: user => axios.post('/login', user),

  verifyUser: _ => axios.post('/verify', {}, {
    headers: { 'Authorization': `bearer ${localStorage.getItem('token')}` }
  })
}

export default Chores