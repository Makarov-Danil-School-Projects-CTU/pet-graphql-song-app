import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import SongList from './components/SongList'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App'
import SongCreate from './components/SongCreate'
import SongDetail from './components/SongDetail'

// Creating Apollo Client (communication with graphql server)
const client = new ApolloClient({
  // we identify each item in apollo by id
  // this way he identifies each object and see updates 
  dataIdFromObject: o => o.id
})

const Root = () => {
  return (
    //Create apollo provider
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={SongList} />
          <Route path='songs/new' component={SongCreate} />
          <Route path='songs/:id' component={SongDetail} />
        </Route>
      </Router>
    </ApolloProvider>
  )
}

ReactDOM.render(<Root />, document.querySelector('#root'))
