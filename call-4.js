function runCallbacks(callbacks) {
    return callbacks
  }
  function firstCallback() {
    console.log(first)
  }
  function secondCallback() {
    console.log(second)
  }
  
  function thirdCallback() {
    console.log(third)
  }
  const callbackArray = [firstCallback, secondCallback, thirdCallback];
  runCallbacks(callbackArray);