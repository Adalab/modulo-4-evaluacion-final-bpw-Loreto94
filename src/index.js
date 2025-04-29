const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

const server= express();

async function getDBConnection(params){
    const connection= await mysql.createConnection({
        host: "172.18.224.1",
        user: "root",
        password: "0000",
        database: "friends"
    });
    connection.connect();
    return connection;
}

server.use(cors());
server.use(express.json());

const port= 5001;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

server.get("/api/friends", async (req, res) => {
    const connection = await getDBConnection();
    const sqlQuery = "SELECT * FROM characters";
    const [result] = await connection.query(sqlQuery);

    connection.end();

    res.status(200).json({
        results: result,
        success: true
    });
})

server.post("/api/newCharacter", async (req, res) => {
    const connection = await getDBConnection();
    const { name, age } = req.body;

    if (!name || !age) {
        res.status(404).json({
            success: false,
            message: "Check the params and use the correct name"
        })
    } else {
        const sqlQuery = "INSERT INTO characters (name, age) VALUES (?, ?)";
        const [result] = await connection.query(sqlQuery, [
            name,
            age
        ])
        
        connection.end();
        
        res.status(201).json({
            success: true
        });
    }
})

server.put("/api/character/:id", async (req, res) => {
    const connection = await getDBConnection();
    const {id} = req.params;
    const { name, age } = req.body;

    const sqlQuery = "UPDATE characters SET name = ?, age = ? WHERE id = ?";
    const [result] = await connection.query(sqlQuery, [name, age, id]);
    
    connection.end();
    
    res.status(200).json({
        success: true,
        id: result.insertId
    });
})

server.delete("/api/character/:id", async (req, res) => {
    const connection = await getDBConnection();
    const {id} = req.params;

    const sqlQuery = "DELETE FROM characters WHERE id = ?";
    const [result] = await connection.query(sqlQuery, [id]);

    connection.end();

    res.status(200).json({
        status: "success",
        message: "Removed element"
    })
})
