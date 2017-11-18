import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {actions} from '../actions'

function mapStateToProps(state) {
  return {...state}
}

const mapDispatchToProps = dispatch => {
  return { actions: bindActionCreators(actions, dispatch) }
}

export const connectComponent = Component => connect(mapStateToProps, mapDispatchToProps)(Component)
