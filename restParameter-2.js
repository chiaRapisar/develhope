function filterOutOdds(...params) {
    return params.filter(param=>param%2==0)
}
const pari=filterOutOdds(1,2,3,4,5,6,7,8,9,10,11,12);
console.log(pari)