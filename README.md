# MOVIE APP
Single page application that allows user to search movie and display detailed info about it.

## Functions
- display list of movies
- search movie by title
- display specific movie details (casts, directors, rate)
- load more movies

[Demo](https://github.com/facebook/create-react-app)

## Stack

- react
- framer-motion
- router
- API (http://tmdb.org/) 
- sass
- fetch 


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to start

- create config.js in root folder
- generate your api key 
- build a image

 `docker build -t sample:dev .`

 - show images

 `docker images`

- run container 

`docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3000:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    sample:dev
  `