let express = require('express');
let app = express();
var path = require('path');

let port = process.env.PORT || 3000;

app.set('views', path.join(__dirname,'Views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'Public')));

app.get('/', (req, res) => {
    res.render('Views/Home')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})