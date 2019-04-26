/* eslint-disable default-case */
import {createTriangleBlocks} from '../components/utils/blockGenerator'

const SET_COLOR = 'SET_COLOR'
const UPDATE_BLOCK = 'UPDATE_BLOCK'

const setColor = hex => ({type: SET_COLOR, hex})
const changeBlockColor = id => ({type: UPDATE_BLOCK, id})

export const setCurrentColor = hex => dispatch => {
  dispatch(setColor(hex))
}

export const updateBlockColor = id => dispatch => {
  dispatch(changeBlockColor(id))
}

const initialState = {currentColor: '#F93396', all: createTriangleBlocks()}

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
    default:
      return state
  }
}
