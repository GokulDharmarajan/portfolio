const express = require("express");
var mysql = require("mysql");
var cors = require("cors");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "portfolioform",
});
app = express();
app.use(express.json());
app.use(cors());

connection.connect();

// All Data
app.get("/", (req, res) => {
  connection.query("SELECT * from contacts", function (error, results) {
    if (error);
    console.log("The solution is: ", results);
    res.json(results);
  });
});

// ============================ Get<h1>User Detail</h1> ==========================

// app.get("/getusers/:id", (req, res) => {
//   connection.query(
//     "SELECT * from contacts where id = ?",
//     [req.params.id],
//     function (error, results) {
//       if (error) {
//       } else {
//         console.log("The solution is: ", results);
//         res.json(results);
//         res.end();
//       }
//     }
//   );
// });

// // ============================ Update ==========================
// app.put("/update", (req, res) => {
//   connection.query(
//     "update contacts set cname=?,email=?,phone=?,message=? where id=?",
//     [
//       req.body.cname,
//       req.body.email,
//       req.body.phone,
//       req.body.message,
//       req.body.id,
//     ],
//     function (error, results) {
//       if (error);
//       console.log("The solution is: ", results);
//       res.json(results);
//     }
//   );
// });
// // ============================ Delete ==========================
// app.put("/delete", (req, res) => {
//   connection.query(
//     "update contacts set is_active=? where id=?",
//     [req.body.is_active, req.body.id],
//     function (error, results) {
//       if (error);
//       res.json(results);
//     }
//   );
// });

// app.get("/get", (req, res) => {
//   connection.query(
//     "SELECT * from contacts where is_active = 1",
//     function (error, results) {
//       if (error) {
//         console.log(error);
//       } else {
//         res.json(results);
//       }
//     }
//   );
// });
// ============================ Insert ==========================

function insert() {
  alert("Submited successfully");
  fetch("http://localhost:3000/insert", {
    method: "POST",
    body: JSON.stringify({
      cname: document.getElementById("cname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
  location.reload();
}
app.post("/insert", (req, res) => {
  connection.query(
    "insert into contacts (cname,email,phone,message) values(?,?,?,?)",
    [req.body.cname, req.body.email, req.body.phone, req.body.message],
    function (error, results) {
      if (error);
      {
        console.log(error);
      }
      console.log("The solution is: ", results);
      res.json(results);
    }
  );
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
