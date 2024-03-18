# interactive-to-do-list

A JS to do list

## Features
- You can add tasks and have a deadline with it
- You can delete tasks
- Tasks are saved in your browser memory 

## Usage
Run `npm start` to start liveserver to hot reload any changes

## Usage with Docker
With Docker:
Run `docker build -t todo-list-app .` to build the app in a docker container 
Use `docker run -d -p <host_port>:<container_port> --name todo-list-container todo-list-app` to serve the app e.g. `docker run -d -p 8080:8080 --name todo-list-container todo-list-app`
Run `docker stop todo-list-container` to stop the container