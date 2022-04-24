npm init
npm install express
npm install dotenv

docker build -t nodejsserve .

docker run -it -d --rm -p 3020:8080 nodejsserve:latest 

OR 

docker-compose up --build

query REST API with http://localhost:3020/service2 in your webbrowser

then docker-compose down --volumes
