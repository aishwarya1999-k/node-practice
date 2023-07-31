console.log(__filename);
console.log(__dirname)
var url = 'http://mylog.io/log'

function log(message){

//Send an http request
console.log(message);
}

module.exports = log
