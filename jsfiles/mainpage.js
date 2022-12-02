let fn = document.getElementById("input1")
let ln = document.getElementById("input2")


const platform = [
    {name:"Facebook",color:"blue", link:`https://www.facebook.com/`},
    {name:"Instgram",color:"purple", link:`https://www.instgram.com/`},
    {name:"Github",color:"orange", link:`https://github.com/`},
    {name:"Pinterset",color:"red", link:`https://www.pinterest.com/`},
    {name:"Twitter",color:"lightblue", link:`https://twitter.com/`},
    {name:"Youtupe",color:"red", link:`https://www.youtube.com/`},
    {name:"Reddit",color:"red", link:`https://www.reddit.com/user/`},
    {name:"Linked In",color:"blue", link:`https://www.linkedin.com/in/`},

]  


$('#btn').click(
    function(){
        $("#main").html("")
        for (let i = 0; i < platform.length; i++) {
            console.log(platform[i].link)
            $("#main").append(
                `
        <div class="conti">
            <i class="fa-solid fa-angle-down"></i>
            <ul >
                <li style="color:${platform[i].color};">
                    <font color="Black">${platform[i].name}</font>
                </li>
            </ul>
            <div class="contichiled" id="contichild" style="display: none;">
                <a href="${platform[i].link + `${fn.value}${ln.value}`}" target="blank"><font color="blue"> 
                    ${platform[i].name}
                    </font></a>
                    </div>
                    </div>
                `
            )
        }
          $(".conti").click(
                    function(){
                $(this).children(".contichiled").slideDown()
                $(this).css(`height`,`130px`)
               $(".contichiled").not($(this).children(".contichiled")).hide()
                $(".conti").not(this).css(`height`,`90px`)

                    }
         )          
        
    }
)
fn.oninput = function(){
    $("#main").html(`<center><font size="5px" style="margin-top: 50px;">Enter Name To Stalk</font></center>`,3000)
}
ln.oninput = function(){
    $("#main").html(`<center><font size="5px" style="margin-top: 50px;">Enter Name To Stalk</font></center>`,3000)
}
