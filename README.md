# GraphQL Song App

## Main idea

This is a song writing application. The main idea is that we can create multiple songs. So we have song page, we list out all different songs. Each song is a collection of lyrics. If we click on a song, we go to song details, where we can see list of lyrics (each row for example). We can create new rows for that song and we can like rows.

## Features:

- MongoDB to store our songs and lyrics, ReactJs and NodeJs
- Usage of GraphQL Server and Apollo Client
- Defined GQL mutations and queries in our project
- Usage of different refetch techniques such as: .data.refetch() with mutation or dataIdFromObject
- Usage of graphql wrapped component, which can add variables for GQL mutations and queries
- Optimistic UI updates
