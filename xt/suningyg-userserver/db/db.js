const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:21104';
const dbName = 'admin';
// 连接
const connect = () => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, {
            useUnifiedTopology: true
        }, function (err, client) {
            err ? reject(err) : resolve(client);
            console.log("Connected successfully to server");
        });
    })
}
// 查
const find = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.find(query ? query : {}).toArray(function (err, docs) {
            err ? reject(err) : resolve(docs);
        });
        client.close();
    })
}
//查单个符合条件
// const findone = (col, query) => {
//     return new Promise(async (resolve, reject) => {
//         let client = await connect();
//         const db = client.db(dbName);
//         const collection = db.collection(col);
//         collection.findone(query ? query : {}).then(res => {
//             console.log(res);
//         });
//         client.close();
//     })
// }
// 增
const insert = (col, query) => {
    return new Promise(async (resolve, reject) => {
        let client = await connect();
        const db = client.db(dbName);
        const collection = db.collection(col);
        collection.insertMany(query, function (err, docs) {
            err ? reject(err) : resolve(docs);
        })
        client.close();
    })
}

module.exports = {
    find,
    // findone,
    insert
}