# MOVIE APP

Single page application that allows user to search movie and display detailed info about it.

![prev](https://raw.githubusercontent.com/3ndrius/Movie_Info/master/movie_mini.jpg?token=AFY4HYJMIN5SMF5PREZ7Y4S7KVEXC)

## Functions
- display list of movies
- search movie by title
- display specific movie details (casts, directors, rate)
- load more movies

[Demo](https://gifted-panini-3b4fc8.netlify.app)

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
  
  ![prev](https://github.com/3ndrius/Movie-app/blob/master/public/images/gifted-panini-3b4fc8.netlify.app_475557.png?raw=true)
