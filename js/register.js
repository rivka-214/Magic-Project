function logIn(){
 
    // משיגה את הערכים שהמשתמש הקליד 
      let password = document.querySelector("#password").value;
      let name = document.querySelector("#name").value;
       let mail = document.querySelector("#email").value;
      var terms=document.querySelector('#terms');
      if (password === "" || name === ""||!terms.checked) {
        alert("נא מלא את כל השדות לפני לחיצה על התחברות.");
        return false;
    }
      let user={
        name:name,
        mail:mail,
        password:password
      }
      if(localStorage.getItem(mail)!=undefined){
        alert("שם משתמש זה כבר נמצא בשימוש")
        setTimeout(()=>{
        window.location.href="../html/login.html"
      },300)

      }
      else
      {
        sessionStorage.setItem(name, JSON.stringify(user));
        localStorage.setItem(name,JSON.stringify(user))
        setTimeout(()=>{
        window.location.href="../html/game.html"
      },300)

      } 

    }