/* eslint-disable default-case */
import {createTriangleBlocks} from '../components/utils/blockGenerator'

const SET_COLOR = 'SET_COLOR'
const UPDATE_BLOCK = 'UPDATE_BLOCK'
const SAVE_GRID = 'SAVE_GRID'

const setColor = hex => ({type: SET_COLOR, hex})
const changeBlockColor = id => ({type: UPDATE_BLOCK, id})
const savingGrid = () => ({type: SAVE_GRID})

export const setCurrentColor = hex => dispatch => {
  dispatch(setColor(hex))
}

export const updateBlockColor = id => dispatch => {
  dispatch(changeBlockColor(id))
}

export const saveGrid = () => dispatch => {
  dispatch(savingGrid())
}

const initialState = {
  currentColor: '#F93396',
  all: createTriangleBlocks(),
  grids: [false]
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_COLOR:
      return {...state, currentColor: action.hex}
    case UPDATE_BLOCK:
      return {
        ...state,
        all: state.all.map(el => {
          if (el.id === action.id) {
            return {...el, fill: state.currentColor}
          } else {
            return el
          }
        })
      }
    case SAVE_GRID:
      return {...state, grids: [...state.grids, state.all]}
    default:
      return state
  }
}
