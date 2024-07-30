 function validate(){
    var name = document.getElementById("name").value;
    var name = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    if(name == "")
    {
        alert("Please Enter valid name");
      return false;
    }
    if(subject == "")
    {
        alert("Please Enter valid subject matter");
      return false;
    }
    if(phone == "")
    {
        alert("Please Enter valid phone number");
      return false;
    }
    if(email == "")
    {
        alert("Please Enter valid email");
      return false;
    }
    if(message == "")
    {
      alert("Please Enter valid message");
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
