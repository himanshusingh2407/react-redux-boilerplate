import React from 'react'
import classes from './Home.scss'

class Home extends React.Component {

  render () {
    return (
      <button className={classes.greeting}
        onClick={() => this.props.sampleMessage('I am saved !')}
        >Save Message</button>
    )
  }
}

Home.propTypes = {
  sampleMessage: React.PropTypes.func.isRequired
}
export default Home
