const express = require("express");
const router = express.Router();
const db = require("../db");


router.get("/", async function(req, res, next) {
 try {
 const results = await db.query("SELECT * FROM veiculos");
 return res.json(results.rows);
 } catch (err) {
 return next(err);
 }
});
router.post("/", async function(req, res, next) {
 try {
 const result = await db.query(
 "INSERT INTO veiculos (marca,modelo) VALUES ($1,$2) RETURNING *",
 [req.body.marca, req.body.modelo]
 );
 return res.json(result.rows[0]);
 } catch (err) {
 return next(err);
 }
});
router.patch("/:id", async function(req, res, next) {
 try {
 const result = await db.query(
 "UPDATE veiculos SET marca=$1, modelo=$2 WHERE id=$3 RETURNING *",
 [req.body.marca, req.body.modelo, req.params.id]
 );
 return res.json(result.rows[0]);
 } catch (err) {
 return next(err);
 }
});
router.delete("/:id", async function(req, res, next) {
 try {
 const result = await db.query("DELETE FROM veiculos WHERE id=$1", [
 req.params.id
 ]);
 return res.json({ message: "Deleted" });
 } catch (err) {
 return next(err);
 }
});


module.exports = router;
