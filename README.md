npm init
npm install express
npm install dotenv

docker build -t nodejsserve .

docker run -it -d --rm -p 3020:8080 nodejsserve:latest 

OR 

docker-compose up --build

query REST API with http://localhost:3020/service2 in your webbrowser

# The relationship between docker-compose and an ECS task-definition
### What is docker-compose?:

From this tutorial, docker-compose is defined as :

    Docker Compose is a way to create reproducible Docker containers using a config file instead of extremely long Docker commands. By using a structured config file, mistakes are easier to pick up and container interactions are easier to define.

### What is a task definition:

Let’s recall what a task-definition is: it is just a specification. You use it to define one or more containers that you want to run together, along with other details such as environment variables, CPU/memory requirements, etc.

From the two definitions, we can see that a task definition role is similar to that of a docker-compose file.
# React frontend, Node.js backend, MySQL database with docker-compose
docker-compose up --build

docker exec -it hello_world_nodejs_mysqldb_1 bash
mysql -uroot -p testdb
123456
SHOW DATABASES;
USE testdb;

curl -X POST http://localhost:4002/api/users -H 'Content-Type: application/json' -d '{"firstName":"David", "lastName":"Fox"}'

docker-compose down --volumes