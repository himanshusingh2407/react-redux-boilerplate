import Home from 'components/Home'
import { connect } from 'react-redux'
import { sampleMessage } from 'redux/actions/sample'

const mapDispatchToProps = {
  sampleMessage: (message) => sampleMessage(message)
}

export default connect(null, mapDispatchToProps)(Home)
