let form = document.getElementById('rightform')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let formbtn = document.getElementById('signin')
let eror = document.getElementById('eror');
let repassword = document.getElementById('repassword');
let overlay = document.getElementById('overlay');
let eror2 = document.getElementById('eroroverlay1');
let overlayform = document.getElementById('overlayform');
let overusername = document.getElementById('resuser');
let overenmail = document.getElementById('resemail');
let overpassword = document.getElementById('respass');
let overpassword1 = document.getElementById('repass1');
let resbtn = document.getElementById('resbtn');
let eroricon = document.getElementById('erorico');
email.style.display = "none";
overlay.style.display = "none";
eroricon.style.display = 'none';
eror.style.color ="red";

eror.innerText = ""
let users = [
    {name:"admin",password:"admin",email:"admin@admin.com"}
]
username.oninput = function(){
   
 const index = users.findIndex( Element =>{
    if (Element.name === username.value) {
                return true;
        }else{
            return false;
        }
    })
        if(index === -1){
        // console.log("shit");
        eror.innerText = "This user not here";
        formbtn.value ="Sign Up";
        email.style.display = "block";
        formbtn.onclick =  addaccount;
        // password.value ="";
        formbtn.disabled = false;


    }else{
        if(username.value === users[index].name){
            formbtn.disabled = true;
        email.style.display = "none";
            eror.innerText = ""
            formbtn.value ="Sign In";
            password.oninput = function(){
            if(password.value === users[index].password){
                formbtn.onclick = open;
                formbtn.disabled = false;
            }else{
                 eror.innerText = "";
                formbtn.disabled = true;
                
            }
        }
        }
    }
}

repassword.onclick = () => {
    overlay.style.display = "block";
     
};
function canceloverlay(){
        overlay.style.display = "none"
};
function addaccount(){
    users.push({name:username.value , password:password.value , email:email.value})
        email.value = "";
        password.value = "";
        email.value = "";
        username.value = "";
        email.style.display = "none";
        eror.innerText = "";
}
function open(){
    window.location.href = 'htmlfiles/mainpage.html';

    password.value = "";
    username.value = "";
}
email.oninput = function emailcheck(){
    let emailvalue = email.value ;
    let lastresult = emailvalue.includes("@");
    let thelast = emailvalue.endsWith(".com")
//  console.log(lastresult)
    if(lastresult === false || thelast === false ){
         eror.innerText = "wrong Email"
       return true;
    }else{
        eror.innerText = ""
    }
}
overlayform.oninput = function overcheck(){
    const index2 = users.findIndex(elemant2 =>{
            if(overusername.value === elemant2.name){
                return true;
            }else{
                return false;
            }
        }
    )
    if(index2 === -1){
       eror2.innerText = "This user is not found "
       eroricon.style.display = "block"
       overenmail.disabled = true;
       overpassword.disabled = true;
       overpassword1.disabled = true;
       resbtn.disabled = true;
    }else{
        eror2.innerText = ""
       eroricon.style.display = "none"
       resbtn.disabled = false;
       overenmail.disabled = false;
       overpassword.disabled = false;
       overpassword1.disabled = false;
       if(overenmail.value === users[index2].email){
        eror2.innerText = ""
        eroricon.style.display = "none"
        overpassword.disabled = false;
        overpassword1.disabled = false;
        overpassword1.oninput = passcheck();
        resbtn.onclick = ()=>{
            users[index2].password = overpassword.value
            overenmail.value = ""
            overpassword.value = ""
            overpassword1.value = ""
            overusername.value = ""
            canceloverlay();
           

            };
       }else{
        eror2.innerText = "Wrong Email"
        eroricon.style.display = "block"
        overpassword.disabled = true;
        overpassword1.disabled = true;
        resbtn.disabled = true;
       }
    }
}
function passcheck(){
    if (overpassword.value === overpassword1.value) {
        eror2.innerText = ""
        eroricon.style.display = "none"
        resbtn.disabled = false;
    } else {
        eror2.innerText = "RE-enter password correct"
        eroricon.style.display = "block"
        resbtn.disabled = true;
    }    
}
function resetpassword(){
    // overlay.style.display = 'none'
    canceloverlay();

}


