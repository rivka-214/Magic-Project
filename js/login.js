//document.getElementById("login").addEventListener("submit",HandleSumbit);

function login()
{
    let playerName=document.querySelector("#playerName").value;
    let password=document.querySelector("#password").value;
    if (playerName === "" || password === "")
     {
      alert("נא מלא את כל השדות.");

      return false;
     }
    if(localStorage.getItem(playerName)!=undefined)
    {
      let user=localStorage.getItem(playerName);
      user=JSON.parse(user);

      if(user.password==password)
      {
        localStorage.setItem(playerName,JSON.stringify(user))
          window.location.href="../html/game.html";   
      }
      else
      {
        document.getElementById("error").style.color="black";
    
      }
  } 
  else
  {
    document.getElementById("error").style.color="black";

  }
       
}
