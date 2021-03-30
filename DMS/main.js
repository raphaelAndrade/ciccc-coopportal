// access code logic 
 function checkPassword(){
       if(document.getElementById('password').value == 'sdms'){
        
          document.location.href = "student_dms/main.html";

        } else if (document.getElementById('password').value == 'adms') {
           
          document.location.href = "student_wmad/main.html";
         } else if (document.getElementById('password').value == 'smgt') {
           
          document.location.href = "student_mgt/main.html";
        } else {
         alert('Wrong Password!');
          return false;
        }
       }