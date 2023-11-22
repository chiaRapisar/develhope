function somma(...argom) {
    return argom.reduce((a,num)=>a+num,0);
}
const sum = somma(3,4,7,2,10);
console.log(sum);
