function timingMagic() {

  let  myTimt =  setInterval(() => {
   

            var x = document.getElementById("magic");
            var y = x.getElementsByTagName("span");
            y[i].classList.remove("regularLetter");
            y[i].classList.add("magicLetter");
          
        }
   , 100);
   let myStopTime=setInterval(() => {
     
            var x = document.getElementById("magic");
            var y = x.getElementsByTagName("span");
        
            y[i].classList.add("regularLetter");
            if (flag == 1)
                i++;
            else
                i--;
            if (i == 5) {
               
                i = 3;
                flag = 0;
            }
            else
                if (i == 0)
                    flag = 1;
      
    }
    , 220);

}
