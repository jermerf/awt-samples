function sendData(event) {
  // Prevents the form from being submitted
  event.preventDefault()
  var theForm = event.target

  var data = new FormData(theForm);
  data.append("Secret", localStorage["cookieToken"])


  $.ajax({
    method: "POST",
    url: "/",
    data,
    processData: false,
    contentType: false
  }).done(res => {
    console.log(res)
  })

  // Submits the form anyways
  // theForm.submit()
}