# React frontend, Node.js backend, MySQL database with docker-compose
docker-compose up --build

docker exec -it hello_world_nodejs_mysqldb_1 bash
mysql -uroot -p testdb
123456
SHOW DATABASES;
USE testdb;

curl -X POST http://localhost:4002/api/users -H 'Content-Type: application/json' -d '{"firstName":"David", "lastName":"Fox"}'

docker-compose down --volumes
