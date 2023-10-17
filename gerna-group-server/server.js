const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
require('dotenv').config()
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db_config = {
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB,
};

let db;

function handleDisconnect() {
  db = mysql.createConnection(db_config);

  db.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 2000);
    }
  });
  db.on("error", function (err) {
    console.log("db error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      handleDisconnect();
    }
  });
}

handleDisconnect();

setInterval(function () {
  db.query("SELECT 1");
}, 5000);

app.get("/", (req, res) => res.send("Hello world!"));

app.get("/top-selling-models", (req, res) => {
  const getTopSellingModels =
    "SELECT gerna_cars.id, gerna_cars.manufactuer, gerna_cars.model, gerna_cars.price, count(gerna_cars.id) as sales FROM gerna_sales, gerna_cars WHERE gerna_sales.model = gerna_cars.id GROUP BY gerna_cars.id ORDER BY sales DESC LIMIT 10";

  db.query(getTopSellingModels, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/top-salers", (req, res) => {
  const getTopSalers =
    "SELECT gerna_employees.id, gerna_employees.name, count(gerna_sales.saler) as totalSales, sum(gerna_cars.price) as totalIncome FROM gerna_sales, gerna_employees, gerna_cars WHERE gerna_cars.id = gerna_sales.model AND gerna_sales.saler = gerna_employees.id GROUP BY gerna_employees.id ORDER BY totalSales DESC LIMIT 10";

  db.query(getTopSalers, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/employees", (req, res) => {
  const getEmployees = `SELECT email, name FROM gerna_employees`;

  db.query(getEmployees, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/employees-list", (req, res) => {
  const department = req.body.data;

  const getEmployeesList = `SELECT id, name, age, position, city FROM gerna_employees WHERE department = '${department}'`;

  db.query(getEmployeesList, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/employee-details", (req, res) => {
  const selectedUser = req.body.data;

  const getEmployeeDetails = `SELECT * FROM gerna_employees WHERE id = ${selectedUser}`;

  db.query(getEmployeeDetails, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/update-employee-information", (req, res) => {
  const data = req.body.data;

  const updateEmployeeInformation = `UPDATE gerna_employees SET name = '${data.name}', position = '${data.position}', age = '${data.age}', address='${data.address}', city = '${data.city}', phone_number='${data.phone_number}', salary = '${data.salary}' WHERE id = ${data.id}`;

  db.query(updateEmployeeInformation, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/new-employee", (req, res) => {
  const randomPassword = Math.random().toString(36).slice(-8);
  const hashedPassword = bcrypt.hashSync(randomPassword, 10);

  const employeeData = req.body.data;

  const addNewEmployee = `INSERT INTO gerna_employees VALUES(null, '${employeeData.name}', '${employeeData.age}', '${employeeData.position}', '${employeeData.address}', '${employeeData.city}', '${employeeData.phone_number}', '${employeeData.email}', '${employeeData.salary}', '${employeeData.department}')`;
  const createUser = `INSERT INTO gerna_accounts VALUES(null, '${employeeData.name}', '${employeeData.email}', '${hashedPassword}', 'employee' )`;

  db.query(addNewEmployee, (err, result) => {
    if (err) {
      console.log(err);
      res.status(400);
    }
  });

  db.query(createUser, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(randomPassword);
    }
  });
});

app.get("/get-cars", (req, res) => {
  const getCarsList = `SELECT * FROM gerna_cars`;

  db.query(getCarsList, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/get-sales", (req, res) => {
  const carID = req.body.data;
  console.log(carID);

  const getSales = `SELECT count(gerna_cars.id) as sales FROM gerna_cars, gerna_sales WHERE gerna_cars.id = gerna_sales.model AND gerna_cars.id = ${carID}`;

  db.query(getSales, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/recent-sales", (req, res) => {
  const getRecentSales = `SELECT count(DATE_FORMAT(date, '%Y-%m-%d')) as sales FROM gerna_sales WHERE date BETWEEN CURDATE() - INTERVAL 30 DAY AND CURDATE()`;

  db.query(getRecentSales, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/total-income", (req, res) => {
  const getTotalIncome = `SELECT sum(gerna_cars.price) as totalIncome FROM gerna_sales, gerna_employees, gerna_cars WHERE gerna_cars.id = gerna_sales.model AND gerna_sales.saler = gerna_employees.id`;

  db.query(getTotalIncome, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/recent-income", (req, res) => {
  const getRecentIncome = `SELECT sum(gerna_cars.price) as totalIncome, count(DATE_FORMAT(date, '%Y-%m-%d')) as sales FROM gerna_sales, gerna_employees, gerna_cars WHERE gerna_cars.id = gerna_sales.model AND gerna_sales.saler = gerna_employees.id AND date BETWEEN CURDATE() - INTERVAL 30 DAY AND CURDATE()`;

  db.query(getRecentIncome, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.post("/delete-employee", (req, res) => {
  const employeeID = req.body.data;

  const deleteEmployee = `DELETE FROM gerna_employees WHERE id = ${employeeID}`;

  db.query(deleteEmployee, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/car-details", (req, res) => {
  const carID = req.body.data;

  const getCarDetails = `SELECT * FROM gerna_cars WHERE id = ${carID}`;

  db.query(getCarDetails, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/new-car", (req, res) => {
  const data = req.body.data;

  console.log(JSON.stringify(data.equipment));

  const addNewCar = `INSERT INTO gerna_cars VALUES(null, '${
    data.manufactuer
  }', '${data.model}', ${data.price}, '${data.engine}', '${JSON.stringify(
    data.equipment
  )}')`;

  db.query(addNewCar, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.post("/new-sale", (req, res) => {
  const data = req.body.data;

  let currentDate = new Date().toJSON().slice(0, 10);

  const newSale = `INSERT INTO gerna_sales VALUES(null, ${data.car}, ${data.saler}, '${currentDate}')`;

  db.query(newSale, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});

app.post("/remove-car", (req, res) => {
  const carID = req.body.data;

  const removeCar = `DELETE FROM gerna_cars WHERE id = ${carID}`;

  db.query(removeCar, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/login", (req, res) => {
  const userData = req.body.data;

  const login = `SELECT * FROM gerna_accounts WHERE email = '${userData.email}'`;

  db.query(login, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result.length > 0) {
        const isPasswordMatch = bcrypt.compareSync(
          userData.password,
          result[0].password
        );
        console.log(userData.password);
        if (isPasswordMatch === true) {
          const auth = {
            authenticated: true,
            authUser: userData.email,
            role: result[0].role,
          };
          res.send(auth);
        }
      }
    }
  });
});

app.post("/send-message", (req, res) => {
  const data = req.body.data;

  console.log(data);

  data.emailsList.map((email) => {
    const sendMessage = `INSERT INTO gerna_messages VALUES(null, '${email}', '${data.title}', '${data.description}', '${data.date}', '${data.sender}')`;

    console.log(sendMessage);
    db.query(sendMessage, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Messages sent successfully");
      }
    });
  });

  res.send("Messages sent successfully");
});

app.post("/get-messages", (req, res) => {
  const user = req.body.data;

  const getMessages = `SELECT * FROM gerna_messages WHERE email  = '${user}'`;

  db.query(getMessages, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.get("/news", (req, res) => {
  const getNews = "SELECT * FROM gerna_news";

  db.query(getNews, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

const port = process.env.PORT || 3001;

app.listen(port);
