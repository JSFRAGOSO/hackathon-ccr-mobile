const {Router} = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const ReminderController = require('./controllers/ReminderController');
const routes = Router();

const upload = multer(uploadConfig);

routes.get('/reminders', ReminderController.index);
routes.post('/reminders', upload.single('thumbnail'), ReminderController.store);

module.exports = routes;