import {connect} from 'react-redux'
import {setVisibility} from '../actions'
import Link from '../components/link'

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.visibility === ownProps.filter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibility(ownProps.filter))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
