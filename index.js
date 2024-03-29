const config = require('./Config/config.js');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors');

// app.use(cors());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// const AuthorizationRouter = require('./authorization/routes.config');
const UsersRouter = require('./Models/users/routes.config');
const PatientsRouter = require('./Models/patients/routes.config');
const NotificationsRouter = require('./Models/notifications/routes.config');

const labreportsRouter = require('./Models/labreports/routes.config');

const labAssistantsRouter = require('./Models/labAssistants/routes.config');

const backupRouter = require('./Models/backupReports/routes.config');
// const QuestionsRouter = require('./questions/routes.config');
// const AnswersRouter = require('./answers/routes.config')

// app.use(function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Credentials', 'true');
//     res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
//     res.header('Access-Control-Expose-Headers', 'Content-Length');
//     res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
//     if (req.method === 'OPTIONS') {
//         return res.send(200);
//     } else {
//         return next();
//     }
// });

app.use(bodyParser.json());
// AuthorizationRouter.routesConfig(app);
UsersRouter.routesConfig(app);
PatientsRouter.routesConfig(app);
NotificationsRouter.routesConfig(app);
labreportsRouter.routesConfig(app);
labAssistantsRouter.routesConfig(app);
backupRouter.routesConfig(app);
// QuestionsRouter.routesConfig(app);
// AnswersRouter.routesConfig(app);


app.listen(config.port, function () {
    console.log('app listening at port %s', config.port);
});
