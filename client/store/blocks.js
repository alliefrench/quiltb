/* eslint-disable default-case */
import {createTriangleBlocks} from '../components/utils/blockGenerator'
import axios from 'axios'

const SET_COLOR = 'SET_COLOR'
const UPDATE_BUILDING_GRID = 'UPDATE_BUILDING_GRID'
const SAVE_GRID = 'SAVE_GRID'
const SELECT_GRID = 'SELECT_GRID'
const DELETE_GRID = 'DELETE_GRID'
const EDIT_GRID = 'EDIT_GRID'
const RESET_BUILDING_GRID = 'RESET_BUILDING_GRID'

const setColor = hex => ({type: SET_COLOR, hex})
const changeBlockColor = id => ({type: UPDATE_BUILDING_GRID, id})
const savingGrid = grid => ({type: SAVE_GRID, grid})
const chooseGrid = idx => ({type: SELECT_GRID, idx})
const resettingGrid = () => ({type: RESET_BUILDING_GRID})
const editingGrid = idx => ({type: EDIT_GRID, idx})
const removeGrid = id => ({type: DELETE_GRID, id})

export const setCurrentColor = hex => dispatch => {
  dispatch(setColor(hex))
}

export const updateBlockColor = id => dispatch => {
  dispatch(changeBlockColor(id))
}

export const saveGrid = (grid, projectId) => async dispatch => {
  const currGrid = {square: JSON.stringify(grid), projectId}
  console.log('currGrid', currGrid)
  const {data} = await axios.post('/api/squares', currGrid)
  dispatch(savingGrid(data))
}

export const selectGrid = idx => dispatch => {
  dispatch(chooseGrid(idx))
}

export const resetGrid = () => dispatch => {
  dispatch(resettingGrid())
}

export const editGrid = idx => dispatch => {
  dispatch(editingGrid(idx))
}

export const deleteGrid = id => dispatch => {
  dispatch(removeGrid(id))
}

const initialGrid = createTriangleBlocks()

const initialState = {
  currentColor: '#F9AA33',
  buildingGrid: initialGrid,
  grids: [],
  selectedGrid: {id: 0, square: initialGrid}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COLOR:
      return {...state, currentColor: action.hex}
    case UPDATE_BUILDING_GRID:
      return {
        ...state,
        buildingGrid: state.buildingGrid.map(el => {
          if (el.id === action.id) {
            return {...el, fill: state.currentColor}
          } else {
            return el
          }
        })
      }
    case SAVE_GRID:
      return {...state, grids: [...state.grids, action.grid]}
    case SELECT_GRID:
      return {...state, selectedGrid: state.grids[action.idx]}
    case RESET_BUILDING_GRID:
      return {...state, buildingGrid: initialState.buildingGrid}
    case EDIT_GRID:
      return {...state, buildingGrid: state.grids[action.idx]}
    case DELETE_GRID:
      const remainingGrids = state.grids.filter(
        (grid, idx) => idx !== action.id
      )
      return {
        ...state,
        grids: remainingGrids
      }
    default:
      return state
  }
}
