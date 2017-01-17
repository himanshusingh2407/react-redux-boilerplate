import { SAMPLE_MESSAGE } from '../actions/sample'

const ACTION_HANDLERS = {
  [SAMPLE_MESSAGE]: (state, action) => {
    const newState = Object.assign({}, state)
    newState.message = action.message
    return newState
  }
}

const initialState = { message: 'Hi' }
export default function ratingReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
