const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const AssignmentRouter = require('./routes/assignmentRouter');
const CommentRouter = require('./routes/CommentRouter');


const PORT = 3001;

const app = express();

app.use(logger('dev'))


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

app.use('/assignments', AssignmentRouter);
app.use('/comments', CommentRouter);


app.listen(PORT, () => console.log('listening on port: ', PORT));
