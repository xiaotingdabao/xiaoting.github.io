//查询：用户名信息
const MongodbClient = require("mongodb").MongoClient,
    assert = require("assert");
// const resback = '';

const find = (query) => {
    (async () => {
        const url = "mongodb://localhost:21104",
            dbName = "admin",
            client = new MongodbClient(url);

        try {

            await client.connect();
            const db = client.db(dbName);

            let col = await db.collection("suninguser");

            col.findOne(query).then(res => {
                console.log(res); //{ _id: 5ccd913ef78b417285224075, name: 'Jim', age: 12 }
                // const resback = res
                // callres(resback)
                if (res === null) {
                    var code = 0;
                } else {
                    var code = 1;
                }
                res.send(code);
                // return res
            });
        } catch (e) {
            // console.log(e.stack);
        } finally {
            client.close();
        }
    })();
}
// const callres = (code) => {
//     var code = 0;
// console.log(resback)
// if (resback === null) {
//     code = 0;
// } else {
//     code = 1;
// }
// return code
// }
module.exports = {
    find
    // callres
}