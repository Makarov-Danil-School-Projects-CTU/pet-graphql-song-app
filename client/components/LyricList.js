import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import likeLyric from '../queries/likeLyric'

class LyricList extends Component {
  onLike(id, likes, content) {
    this.props.mutate({
      variables: { id },
      // Set up an optimistic response
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: id,
          __typename: 'LyricType',
          // Guessing a future value
          likes: likes + 1,
          content: content,
        },
      },
    })
  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className='collection-item'>
          {content}
          {/* magic material icon class which gets a needed icon from <i> tag and the inner value */}
          <div className='vote-box'>
            <i className='material-icons' onClick={() => this.onLike(id, likes, content)}>
              thumb_up
            </i>
            {likes}
          </div>
        </li>
      )
    })
  }
  render() {
    return <ul className='collection'>{this.renderLyrics()}</ul>
  }
}

export default graphql(likeLyric)(LyricList)
