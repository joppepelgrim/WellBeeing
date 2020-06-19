const express = require('express');

const app = express()

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is currently running on port ${PORT}`));

//Initializing ejs
app.set('views', 'view')
app.set('view engine', 'ejs')

app.use('/static', express.static('static'));
app.get('/', (req, res) => {res.render('index.ejs')})



