const { Router } = require("express");
const request = require('postman-request')
const router = Router();
const getConectionRedis = require('../database/connectionRedis');

//this router is for practice
router
    .get("/", (req, res) => {
        res.json({ message: "Welcome to lab test!" })
    })

    .get("/get-characters", async (req, res) => {
        const conection = getConectionRedis()

        await conection.connect();
        /* 
                const characters =  await conection.get('characters')
        
                if(characters){
                    return res.json(JSON.parse(characters))
                }
          */
        request.get('https://rickandmortyapi.com/api/character', (error, response, body) => {

            if (error) {
                console.log(`A error has wrong ${error}`);
            } else {
                res.send(body);
            }
        })

        // res.sendStatus(200)
    })

module.exports = router;
