let power = (a, b) => {
    return Array.apply(null, { length: b }).map(x => a).reduce((x,y) => x * y);
}


const p = require('./index')
let x = p(parseInt( process.env.number || 7 ));
console.log(x);
