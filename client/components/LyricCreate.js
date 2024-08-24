import React, { Component } from 'react'
import addLyricToSong from '../queries/addLyricToSong'
import { graphql } from 'react-apollo'
import fetchSong from '../queries/fetchSong'

class LyricCreate extends Component {
  constructor(props) {
    super(props)

    this.state = { content: '' }
  }
  onSubmit(event) {
    // automatically attempts send this to backend
    event.preventDefault()

    this.props
      .mutate({
        variables: { content: this.state.content, songId: this.props.songId },
        // Possible query, but we set up dataIdFromObj in index.js
        // Apollo automatically refetches queries when see some updates 
        // refetchQueries: [{query: fetchSong, variables: {id: this.props.songId}}]
      })
      .then(() => {
        this.setState({ content: '' })
      })
  }
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a lyric</label>
        <input onChange={(event) => this.setState({ content: event.target.value })} value={this.state.content} />
      </form>
    )
  }
}

export default graphql(addLyricToSong)(LyricCreate)
