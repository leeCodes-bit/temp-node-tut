// you can have multiple events at the same time
// we first listen for events then emit it
// we can pass the arguement when emitting an event
// even if you dont write your own event, events are a core building block of node

const EventEmitter = require('events')

const customEmitter = new EventEmitter()
customEmitter.emit('response')

customEmitter.on('response', (name, id) => {
    console.log(`Data recieved user ${name} with id: ${id}`);
})

customEmitter.on('response', () => {
    console.log(`Some other logic here `);
})

customEmitter.emit('response', 'John', 34)
