//? Read Operations

//* 2.a find(): The find() method is the most common way to retrieve documents from a collection. It allows you to specify query conditions to filter the documents you want to retrieve.
//? syntax => db.collection_name.find({key:value})
// db.product.find({ name: "vinod" });
// db.product.find({'age':29})

//* 2.b findOne(): The findOne() method returns a single document that matches the specified query condition. It's useful when you only need to retrieve one document.
//? syntax => db.collection_name.findOne({key:value})
// db.product.findOne({ age: 29 });
// db.product.findOne({'name':'vinod'})
