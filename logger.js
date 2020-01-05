//index.js

const Logger = require('./logger')

const logger = new Logger 

logger.on('message', data=>{
    console.log ("an event occured:",data)
})

logger.content ('hello world')
logger.content ('hi')


const EventEmitter = require('events')
const uuid = require('uuid')

class Logger extends EventEmitter {
    content(msg){
        this.emit('message',{id:uuid.v4(),msg:msg})
    }
}

module.exports = Logger