function SendMail(){
    var params={
        Name:document.getElementById("Name").value,
        email_id:document.getElementById("email_id").value,
        number:document.getElementById("number").value,
        subject:document.getElementById("subject").value,
        message:document.getElementById("message").value
    }
    emailjs.send("service_ztb79g5","template_x6p1j9n", params).then(function(res){
        alert("Success!"+res.status);
        Name.value='';
        email_id.value='';
        number.value='';
        subject.value='';
        message.value='';
    })
    
     
}
