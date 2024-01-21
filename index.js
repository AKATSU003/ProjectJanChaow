import express from "express"
import mysql from "mysql"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    username:"root",
    database:"projectjanchaow"
})

app.get("/",(req,res)=>{
    const q = "SELECT contract.CusID,contract.Status,customers.CusName ,contract.ConID,contract.Principle FROM `contract`LEFT JOIN customers ON contract.CusID = customers.CusID;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/contract",(req,res)=>{
    const q = "SELECT * FROM `contract`;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.get("/customers",(req,res)=>{
    const q = "SELECT * FROM `customers`;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.post("/",(req,res)=>{
    const q = "sdgdsdINSERT INTO customers(`CusName`,`CusAddress`,`CusPhoneNo`,`CusFacebook`,`CusIncome`,`CusAsset`)VALUE(?)"
    const value = [
        req.body.CusName,
        req.body.CusAddress,
        req.body.CusPhoneNo,
        req.body.CusFacebook,
        req.body.CusIncome,
        req.body.CusAsset,
    ]
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
})
app.listen(8800, ()=>{
    console.log("Connected to backend")
})