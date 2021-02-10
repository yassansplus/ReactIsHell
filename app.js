var app = require('pushstate-server');

app.start({
    port: 3000,
    directory: './src'
},() => {
    console.log("Server running, navigate to http://localhost:3000")
});
