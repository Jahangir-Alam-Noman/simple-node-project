const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Woooow..... I am learning node and express automatic restart');
})


const users = [
    { id: 0, name: 'Shusmita', email: 'Shusmita@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabana', email: 'shabana3@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },

]

/* app.get('/users', (req, res) => {
    console.log(req.query.search);
    res.send(users);
}) */


app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameters 
    if (search) {
        const searchResult = users.filter(user =>
            user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);

    }
    else {
        res.send(users);
    }
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})


// dynamin api

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mangoes', 'banana', 'oranges', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tik marka fazli');
})


app.listen(port, () => {
    console.log('listening to port', port);
})