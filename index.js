const express = require('express');
const { all } = require('express/lib/application');
const Datastore = require('nedb');


const app = express();
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Starting server at ${port}`);
});

app.use(express.static('public'));
app.use(express.json({ limit: "1mb" }));

const database = new Datastore('database.db');
database.loadDatabase();


app.get("/api", (request, response) => {
    database.find({}, (err, data) => {
        if (err) {
            response.end();
            return;
        }
        response.json(data);
    })
});

app.post("/api", (request, response) => {
    const data2 = request.body;
    const timestamp = Date.now();
    data2.timestamp = timestamp;
    database.insert(data2);
    response.json(data2);
})

