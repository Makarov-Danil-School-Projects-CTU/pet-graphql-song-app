import React, { Component } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { Link } from 'react-router'
import query from '../queries/fetchSongs'
import deleteSong from '../queries/deleteSong'

class SongList extends Component {
  onSongDelete(id) {
    this.props
      .mutate({ variables: { id } })
      // data properti from graphql library has a refetch function
      // that refetches all queries assotiated with this component
      // in this case we have only 1 query
      .then(() => this.props.data.refetch())
  }

  renderSongs() {
    return this.props.data.songs.map(({ id, title }) => {
      return (
        <li className='collection-item' key={id}>
          <Link to={`/songs/${id}`}>{title}</Link>
          <i className='material-icons' onClick={() => this.onSongDelete(id)}>
            delete
          </i>
        </li>
      )
    })
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <ul className='collection'>{this.renderSongs()}</ul>
        <Link to='/songs/new' className='btn-floating btn-large red right'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    )
  }
}

// we can chain requests this way
export default graphql(deleteSong)(graphql(query)(SongList))
