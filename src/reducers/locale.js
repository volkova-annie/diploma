/* eslint-disable require-jsdoc */
export function locale(state = {}, action) {
  switch (action.type) {
  case 'locale/SWITCH_LOCALE': {
    return action.locale
  }
  default:
    return state
  }
}
