const EventEmitter = require('events')

const customerEmitter = new EventEmitter();

customerEmitter.on('request', (data)=>{
    console.log(data)
})

customerEmitter.on('request', ()=>{
    console.log("request")
})

customerEmitter.emit('request')
customerEmitter.emit('request', "hello")