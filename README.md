# Tic Tac Toe Front-End

## Summary
This is the front-end side of Tic Tac Toe game created with the help of `react`. Its purpose is to save serve a Tic Tac Toe layout with interactive actions and communicate and sync state from the api.

## Installation
1. Clone this repository with `git clone https://github.com/martynas3336/ticTacToe-frontEnd.git`.
2. Cd into the cloned folder with `cd ticTacToe-frontEnd`.
3. Edit `docker-compose.yml` and edit `ports` per your need.
4. Run docker.
```
docker-compose up -d
docker exec -it tictactoefrontend_client_1 sh
```
5. Install dependencies with `npm install`.
6. Build app with `npm run build`.
7. Start app with `npm run start`.

## Additional actions
You may have to setup a higher level webserver, which would reverse proxy to this application.

Nginx example:
```
server {
    listen 80;
    listen [::]:80;
    server_name example.com;

    location /__webpack_hmr {
        proxy_pass http://127.0.0.1:3020;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    location / {
        proxy_pass http://127.0.0.1:3020;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```
