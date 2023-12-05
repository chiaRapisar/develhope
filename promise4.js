function fetchDataFromAPI() {
    let succes= Math.random()*(0-0,5)+0;
    return new Promise((resolve, reject)=>{
    if(succes<0,5){
        resolve(`Data retrieved successfully`)
    } else{
        reject(new Error(`Error: Failed to fetch data`))
    }
 })
  }
  
  fetchDataFromAPI()
  .then((data)=>{
    console.log(data);
  })
  .catch((error)=>{
    console.log(error)
  })
