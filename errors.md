
//1
b ~/Desktop/wdi/UNIT_02/HW/TO_DO
$ node app.js 
express-session deprecated req.secret; provide secret option app.js:22:9
/Users/b/Desktop/wdi/UNIT_02/HW/TO_DO/node_modules/express/lib/router/route.js:202
        throw new Error(msg);
        ^

Error: Route.get() requires callback functions but got a [object Undefined]
    at Route.(anonymous function) [as get] (/Users/b/Desktop/wdi/UNIT_02/HW/TO_DO/node_modules/express/lib/router/route.js:202:15)
    at Function.proto.(anonymous function) [as get] (/Users/b/Desktop/wdi/UNIT_02/HW/TO_DO/node_modules/express/lib/router/index.js:510:19)
    at Object.<anonymous> (/Users/b/Desktop/wdi/UNIT_02/HW/TO_DO/routes/TO_DO-routes.js:7:13)
    at Module._compile (module.js:569:30)
    at Object.Module._extensions..js (module.js:580:10)
    at Module.load (module.js:503:32)
    at tryModuleLoad (module.js:466:12)
    at Function.Module._load (module.js:458:3)
    at Module.require (module.js:513:17)
    at require (internal/module.js:11:18)



//2

b ~/Desktop/wdi/UNIT_02/HW/TO_DO/db/migrations
$ psql
psql (9.6.3)
Type "help" for help.

b=# \i m
migration.sql   migration2.sql  
b=# \i migration.sql
psql:migration.sql:2: ERROR:  database "to_do" already exists
psql:migration.sql:4: \connect: FATAL:  database "TO_DO" does not exist