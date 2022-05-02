# React frontend, Node.js backend, MySQL database with docker-compose
docker-compose up --build


To log into the container so we can check the table insertion works:
```
docker exec -it hello_world_nodejs_mysqldb_1 bash
```

To access the table in MySQL

```
mysql -uroot -p testdb
123456
SHOW DATABASES;
USE testdb;

SELECT * FROM Users;
```

To insert a record into the table
```
curl -X POST http://localhost:4002/api/users -H 'Content-Type: application/json' -d '{"firstName":"David", "lastName":"Fox"}'
```

To stop the containers and delete attached volumes

```
docker-compose down --volumes
```
