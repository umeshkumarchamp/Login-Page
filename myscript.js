function login(){
    let email = document.getElementById("emailid").value; 
    let pwd = document.getElementById("password").value; 

    if(email =="umesh@gmail.com" && pwd == "umesh@123")
    {
        location.assign("file:///C:/Users/UMESH%20KUMAR%20MAHTO/Desktop/Login_Page/page.html"); 
    }
    else{
        window.alert("Login Failed."); 
    }
}