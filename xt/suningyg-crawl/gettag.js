const https = require('https')
const {
    insert
} = require('./db')

https.get('https://f.m.suning.com/api/getWapIndexProTagNew.do?u=&c=157268062836476139&cityCode=020&sceneIds=25-56&count=300&flag=1&channel=322&sceneIds2=11-37&count2=20&terminal=wap&callback=getWapIndexProTagNew', (res) => {
    res.setEncoding('utf8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    });
    res.on('end', () => {
        var d = rawData.slice(21, -2)
        let suggoods = JSON.parse(d).data.sugGoods[0].skus;
        console.log(suggoods)
        suggoods.forEach(element => {
            insert('suning', [{
                name: element.sugGoodsName,
                price: element.price,
                refprice: element.refprice,
                comments: element.comments,
                picurl: element.pictureUrl,
                apsurl: element.apsClickUrl,
                showname: element.catGroupShowName,
                labelName: element.labelName
            }])
        });
    });
}).on('error', (e) => {
    console.error(`出现错误: ${e.message}`);
});
//查询：用户名信息
// const MongodbClient = require("mongodb").MongoClient,
//     assert = require("assert");

// (async () => {
//     const url = "mongodb://localhost:21104",
//         dbName = "admin",
//         client = new MongodbClient(url);

//     try {

//         await client.connect();
//         const db = client.db(dbName);

//         let col = await db.collection("suninguser");
//         col.findOne({ name: '傻子' }).then(res => {
//             console.log(res); //{ _id: 5ccd913ef78b417285224075, name: 'Jim', age: 12 }
//         });

//     } catch (e) {
//         console.log(e.stack);
//     } finally {
//         client.close();
//     }
// })();