<!--Open Command Prompt/ CMD  -->
<!-- This Command used CMD. Bacic command Mongodb start and check database
1) C:\Users\HP>mongod --version
2) C:\Users\HP>mongosh
3) test> show dbs / show databases
4) test> use ajitdbname;
5) studentajit> db.createCollection('collection-name’);
6) studentajit> show collections;
7) studentajit> show dbs
8) studentajit> db.collection-name.drop();
9) studentajit> db.dropDatabase();

Store Data in mongodb. This is a One Command Multiples working. Create database name "shop" and Create collection name "products".
10) C:\Users\HP>mongoimport --file "E:\Thapa-Technical-MongoDB Import Files\products.json" --db shop --collection products
Note:-simple document formate store command like {{...}...},{{...}...} this.

11) C:\Users\HP>mongoimport --file "E:\Thapa-Technical-MongoDB Import Files\sales.json" --db shop --collection sales --jsonArray
Note:- Array on an Object [{...},{...},] 

This Command Export docume in json formate
12) mongoexport --db shop --collection sales --out "E:\Thapa-Technical-MongoDB Import Files\salestestajit.json"

Note:- shop> to Main Dir Like this C:\Users\HP> Bottom commend used.
13) shop> (To exit, press Ctrl+C again or Ctrl+D or type .exit)
shop> .exit
C:\Users\HP>
-->