/* eslint-disable default-case */
import {createTriangleBlocks} from '../components/utils/blockGenerator'

const SET_COLOR = 'SET_COLOR'
const UPDATE_BLOCK = 'UPDATE_BLOCK'
const SAVE_GRID = 'SAVE_GRID'
const SELECT_GRID = 'SELECT_GRID'
const DELETE_GRID = 'DELETE_GRID'
const RESET_GRID = 'RESET_GRID'

const setColor = hex => ({type: SET_COLOR, hex})
const changeBlockColor = id => ({type: UPDATE_BLOCK, id})
const savingGrid = id => ({type: SAVE_GRID, id})
const chooseGrid = idx => ({type: SELECT_GRID, idx})
const resettingGrid = () => ({type: RESET_GRID})
const removeGrid = id => ({type: DELETE_GRID, id})

export const setCurrentColor = hex => dispatch => {
  dispatch(setColor(hex))
}

export const updateBlockColor = id => dispatch => {
  dispatch(changeBlockColor(id))
}

export const saveGrid = () => dispatch => {
  dispatch(savingGrid())
}

export const selectGrid = idx => dispatch => {
  dispatch(chooseGrid(idx))
}

export const resetGrid = () => dispatch => {
  dispatch(resettingGrid())
}

export const deleteGrid = id => dispatch => {
  dispatch(removeGrid(id))
}

const initialGrid = createTriangleBlocks()

const initialState = {
  currentColor: '#F9AA33',
  buildingGrid: initialGrid,
  grids: [],
  selectedGrid: initialGrid
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COLOR:
      return {...state, currentColor: action.hex}
    case UPDATE_BLOCK:
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
      return {...state, grids: [...state.grids, state.buildingGrid]}
    case SELECT_GRID:
      return {...state, selectedGrid: state.grids[action.idx]}
    case RESET_GRID:
      return {...state, buildingGrid: initialState.buildingGrid}
    default:
      return state
  }
}
