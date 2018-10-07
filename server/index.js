const express = require('express');
const bodyParser = require('body-parser');
const SC = require('./controllers/save_controller')

const app = express();
app.use(bodyParser.json());
//app.post('/api/articles', SC.writeComment);
app.put('/api/articles/:id', SC.addComment);
app.get('/api/articles', SC.displayArticle);
app.delete('/api/readlater/:id', SC.deleteMessage)
//app.use( express.static( __dirname + '/../public/build' ) );
app.post('/api/readlater', SC.addToRead);
app.get('/api/readlater', SC.getReadLater);

const port = 4001;
app.listen(port, () => {
    console.log(`listening on port ${port}`)
})