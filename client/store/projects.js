import axios from 'axios'

const GET_PROJECTS = 'GET_PROJECTS'
const CREATE_PROJECT = 'CREATE_PROJECT'
const SELECT_PROJECT = 'SELECT_PROJECT'
const DELETE_PROJECT = 'DELETE_PROJECT'

const gettingProjects = projects => ({type: GET_PROJECTS, projects})
const addProject = project => ({type: CREATE_PROJECT, project})
const chooseProject = id => ({type: SELECT_PROJECT, id})
const removeProject = id => ({type: DELETE_PROJECT, id})

export const getProjects = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/projects')
    dispatch(gettingProjects(data))
  } catch (error) {
    console.error(error)
  }
}

export const selectProject = id => dispatch => {
  dispatch(chooseProject(id))
}

export const createProject = project => async dispatch => {
  try {
    const {data} = await axios.post('/api/projects', project)
    dispatch(addProject(data))
  } catch (error) {
    console.error(error)
  }
}

export const deleteProject = id => async dispatch => {
  try {
    await axios.delete('/api/projects', id)
    dispatch(removeProject(id))
  } catch (error) {
    console.error(error)
  }
}

const initialState = {
  all: [],
  selectedProject: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PROJECTS:
      return {...state, all: action.projects}
    case CREATE_PROJECT:
      return {...state, all: [...state.all, action.project]}
    case SELECT_PROJECT:
      const selected = state.all.filter(project => project.id === action.id)
      return {
        ...state,
        selectedProject: selected[0]
      }
    case DELETE_PROJECT:
      return {
        ...state,
        all: state.all.filter(project => project.id !== action.id)
      }
    default:
      return state
  }
}
