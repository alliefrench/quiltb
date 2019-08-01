/* eslint-disable default-case */
import {createTriangleBlocks} from '../components/utils/blockGenerator'
import parser from '../components/utils/parser'
import axios from 'axios'

const GET_GRIDS = 'GET_GRIDS'
const SET_COLOR = 'SET_COLOR'
const UPDATE_TRIANGLE_COLOR = 'UPDATE_TRIANGLE_COLOR'
const UPDATE_TRIANGE_OPACITY = 'UPDATE_TRIANGLE_OPACITY'
const SAVE_GRID = 'SAVE_GRID'
const UPDATE_GRID = 'UPDATE_GRID'
const SELECT_GRID = 'SELECT_GRID'
const DELETE_GRID = 'DELETE_GRID'
const CLEAR_GRID = 'CLEAR_GRID'
const EDIT_GRID = 'EDIT_GRID'
const RESET_BUILDING_GRID = 'RESET_BUILDING_GRID'
const RESET_GRIDS = 'RESET_GRIDS'

const gettingGrids = grids => ({type: GET_GRIDS, grids})
const setColor = hex => ({type: SET_COLOR, hex})
const changeBlockColor = id => ({type: UPDATE_TRIANGLE_COLOR, id})
const changingBlockOpacity = (id, opacity) => ({
  type: UPDATE_TRIANGE_OPACITY,
  id,
  opacity
})
const savingGrid = grid => ({type: SAVE_GRID, grid})
const updatingGrid = grid => ({type: UPDATE_GRID, grid})
const chooseGrid = grid => ({type: SELECT_GRID, grid})
const resettingGrid = () => ({type: RESET_BUILDING_GRID})
const editingGrid = idx => ({type: EDIT_GRID, idx})
const removeGrid = (isLoggedIn, id) => ({type: DELETE_GRID, isLoggedIn, id})
const clearGuestGrid = id => ({type: CLEAR_GRID, id})
const resettingGrids = () => ({type: RESET_GRIDS})

export const getGrids = (isLoggedIn, projectId) => async dispatch => {
  try {
    if (isLoggedIn) {
      const {data} = await axios.get(`/api/squares/${projectId}`)
      dispatch(gettingGrids(data))
    }
  } catch (error) {
    console.error(error)
  }
}

export const setCurrentColor = hex => dispatch => {
  dispatch(setColor(hex))
}

export const updateBlockColor = id => dispatch => {
  dispatch(changeBlockColor(id))
}

export const changeBlockOpacity = (id, opacity) => dispatch => {
  dispatch(changingBlockOpacity(id, opacity))
}

// for logged-in users
export const saveGrid = (grid, projectId) => async dispatch => {
  try {
    const currGrid = {square: JSON.stringify(grid), projectId}
    console.log('currGrid', currGrid)
    const {data} = await axios.post('/api/squares', currGrid)
    dispatch(savingGrid(data))
  } catch (error) {
    console.error(error)
  }
}

export const updateGrid = grid => async dispatch => {
  try {
    const currGrid = {square: JSON.stringify(grid.square)}
    const {data} = await axios.put(`/api/squares/${grid.id}`, currGrid)
    dispatch(updatingGrid(data[1][0]))
  } catch (error) {
    console.error(error)
  }
}

//for guests
export const tempSaveGrid = grid => dispatch => {
  const temp = {id: null, square: grid}
  dispatch(savingGrid(temp))
}

export const selectGrid = grid => dispatch => {
  dispatch(chooseGrid(grid))
}

export const resetGrid = () => dispatch => {
  dispatch(resettingGrid())
}

export const editGrid = idx => dispatch => {
  dispatch(editingGrid(idx))
}

export const deleteGrid = (isLoggedIn, id) => async dispatch => {
  console.log('delete ID', id)
  if (isLoggedIn) {
    await axios.delete(`/api/squares`, {data: {id}})
    dispatch(removeGrid(isLoggedIn, id))
  } else {
    dispatch(clearGuestGrid(id))
  }
}

export const resetGrids = () => dispatch => {
  dispatch(resettingGrids())
}

const initialGrid = createTriangleBlocks()

const initialState = {
  currentColor: '#F9AA33',
  buildingGrid: {id: null, square: [...initialGrid]},
  grids: [],
  selectedGrid: {id: null, square: [...initialGrid]}
}

// eslint-disable-next-line complexity
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_GRIDS:
      return {...state, grids: action.grids}
    case SET_COLOR:
      return {...state, currentColor: action.hex}
    case UPDATE_TRIANGLE_COLOR:
      return {
        ...state,
        buildingGrid: {
          ...state.buildingGrid,
          square: state.buildingGrid.square.map(el => {
            if (el.id === action.id) {
              return {...el, fill: state.currentColor}
            } else {
              return el
            }
          })
        }
      }
    case UPDATE_TRIANGE_OPACITY:
      return {
        ...state,
        buildingGrid: {
          ...state.buildingGrid,
          square: state.buildingGrid.square.map(el => {
            if (el.id === action.id) {
              return {...el, opacity: action.opacity}
            } else {
              return el
            }
          })
        }
      }
    case SAVE_GRID:
      return {...state, grids: [...state.grids, action.grid]}
    case UPDATE_GRID:
      return {
        ...state,
        grids: [
          ...state.grids.filter(grid => grid.id !== action.grid.id),
          action.grid
        ]
      }
    case SELECT_GRID:
      return {...state, selectedGrid: action.grid}
    case RESET_BUILDING_GRID:
      return {...state, buildingGrid: initialState.buildingGrid}
    case EDIT_GRID:
      return {
        ...state,
        buildingGrid: {
          id: state.grids[action.idx].id,
          square: parser(state.grids[action.idx].square)
        }
      }
    case DELETE_GRID:
      const remainingGrids = state.grids.filter(grid => grid.id !== action.id)
      return {
        ...state,
        grids: remainingGrids
      }
    case CLEAR_GRID:
      const guestGrids = state.grids.filter(
        (grid, index) => index !== action.id
      )
      return {
        ...state,
        grids: guestGrids
      }
    case RESET_GRIDS:
      return initialState
    default:
      return state
  }
}
