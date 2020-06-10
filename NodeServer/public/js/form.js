import { json } from "body-parser";

function sendData(event) {
  // Prevents the form from being submitted
  event.preventDefault()
  var theForm = event.target

  // var data = new FormData(theForm);
  // data.append("secret", localStorage["cookieToken"])

  // $.ajax({
  //   method: "POST",
  //   url: "/",
  //   data,
  //   processData: false,
  //   contentType: "application/json"
  // }).done(res => {
  //   console.log(res)
  // })

  var data = {
    username: $('#username').val(),
    password: $('#password').val(),
    secret: localStorage["cookieToken"],
  }

  $.post('/', data, res => {
    console.log(res)
  })


  // Submits the form anyways
  // theForm.submit()
}