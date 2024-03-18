const clc = require("cli-color")

function Message(mex) {
    console.log(clc.black(`C'è un messaggio per${mex}`))
}
Message(" "+"Giorgio")