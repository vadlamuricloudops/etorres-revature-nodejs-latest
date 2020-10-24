const { decodeBase64 } = require("bcryptjs");
const express = require("express");
const router = express.Router();
const db = require("../../models");


//@route        GET /api/divisions
//@desc         Get all divisions
//@access        Public
router.get("/api/divisions", (req, res) => {
    db.Division.finAll({}).then( divisions => {
        res.json(divisions)
    })
})

//@route        GET /api/cases/:id 
//@desc         Get division
//@access       Public
router.get("/api/divisions/:id", (req, res) => {
    db.Division.findOne({
        where: {
            id
        }
    }).then( division => {
        res.json(division);
    })
 })

//@route        POST /api/divisions
//@desc         Create new case
//@access       Public
router.post("api/divisions", (req, res) => {
db.Division.create(res.body).then(newDiv => {
    res.status(201).json(newDiv)
})
})

//@route        PUT /api/divisions/:id
//@desc         Update divisions
//@access       Public
router.put("api/cases/:id", (req,res) => {
    db.Division.update({
        where: {
            id
        }
    }).then(division => {
        res.json(divisioni);
    })
})


//@route        POST /api/division
//@desc         Delete division
//@access       Public
router.delete("api/divisions/:id", (req, res) => {
    db.Division.destroy({
        where: {
            id
        }
    }).then( division => {
        res.json(division);
    })
})