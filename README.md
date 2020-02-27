# React Parcel Express Typescript

**(react-parcel-express-typescript)**

Boilerplate for a universal react app using babel, express, parcel, and typescript. Server-side and client-side code is written with ES6 imports and compiled via babel. During development HMR is active for client or server-side code changes (via nodemon).

This is a **WIP** mainly for myself to try and learn more about building my own webstack for react / express and typescript instead of just using create-react-app.

## Scripts

| Command      | description                                                        |
| ------------ | ------------------------------------------------------------------ |
| build:client | Parcel will build the client code once for production              |
| build:server | Parcel will build the server code once for production              |
| build        | Runs build:client and build:sever                                  |
| clean        | Removes all files from dist/                                       |
| dev:parcel   | Start Parcel's internal server with HMR (client-side only)         |
| dev:server   | Start server using nodemon to watch for changes                    |
| dev          | Watch and start express for development with HMR (client & server) |
| prod         | Build and start express for production                             |
| prod:server  | Start server using node for production                             |
| test:c       | Generate a test coverage report using jest                         |
| test         | Run tests using jest                                               |
| watch:client | Parcel will watch the client code for development                  |
| watch:server | Parcel will watch the server code for development                  |
| watch        | Runs watch:client and watch:sever                                  |
