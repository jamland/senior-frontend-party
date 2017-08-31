import React, { Component } from 'react'
import {connect} from 'react-redux'

import * as Actions from '../../actions/data-actions'
import ServerList from './ServerList'


class Home extends Component {

  componentWillMount() {
    this.props.fetchServer()
  }

  render() {

    if (!this.props.data.servers) {
      return (
        <div>
          <div>No servers yet added 😥</div>
        </div>
      )
    } else {
      return (
        <ServerList
          servers={this.props.data.servers}
        />
      )
    }
  }

}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    data: state.data,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchServer: () => dispatch(Actions.fetchServer())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
