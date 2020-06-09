const figlet = require('figlet')


figlet("Hello World!", { font: "Gothic" }, (err, data) => {
  if (err) {
    console.log("Something went wrong")
  } else {
    console.log(data)
  }
})