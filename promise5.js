function callback_BasedFunction(arg1, arg2) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = arg1 + arg2;
            if (result % 2 !== 0) {
                resolve(result);
            } else {
                reject(new Error('Result is not odd!'));
            }
        }, 1000);
    });
}

callback_BasedFunction(2, 3)
//     .then(result => { 
    // console.log(result); })
//     .cath(error=> { console.error(error); })
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error(error);
});

