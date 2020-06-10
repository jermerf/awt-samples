var prom1 = new Promise((resolve, reject) => {
  var guess = prompt("What is the password?")
  if (guess == "tesla") {
    resolve("Welcome agent Purrflufficus")
  } else {
    reject("Rejected, possible Dwawg")
  }
}).then(result => {
  alert("Resolved successfully: " + result)
}).catch(error => {
  alert("Something is wrong bawss: " + error)
}).then(() => {
  alert("Misson: Retrieve the simpson collar")
})

Promise.resolve(42)
  .then(result => {

  })


var prom2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(true)
  }, 1500)
}).then(isLoggedIn => {
  if (isLoggedIn) {
    return "You have logged in"
  } else {
    throw new Error("Something else...")
  }
}).then(msg => {

  var delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      alert("Phase 2 complete: " + msg)
      resolve("All phases complete")
    }, 1500)
  })

  return delayedPromise
}).catch(error => {
  alert(error)
  console.log(error)
}).then(result => {
  alert(result)
})

// Async/Await

function iDoStuff() {
  var x = 10
  var y = x * 2
  var z = 2 * x + y
  return z
}

function starter() {
  var w = "moo"
  var v = "bark"
  iDoStuff()
  var u = "meow"
}

