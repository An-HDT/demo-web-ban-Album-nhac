class user_info{
    constructor(account,password,flag){
         this.account = account;
         this.password = password;
         this.flag = flag;
    }
}
    const homepage = document.getElementById("homepage");
    const shop = document.getElementById("shop");
    const sign_in = document.getElementById("signin");
let admin = new user_info("admin","tuitaolaadminthichbandia",0);
let user_manage = [];
let Data = JSON.stringify(localStorage.getItem("user_manage"));
if (Data != 'null' || Data.search("[]") == -1){
   user_manage = JSON.parse(localStorage.getItem("user_manage"));
   key = 0;
   for(i = 0;i < Object.keys(user_manage).length;i++){
   if(user_manage[i].flag == 1){
       key = 1;
       break;
   }   
   if(user_manage[i].flag == 2){
       key = 2;
       break;
   }
}
if(key == 1){
   window.location.href="trangchu.html";
}
if(key == 2){
   window.location.href="trangchu.html";
}
if(key == 0){
     homepage.id="show";
     shop.id="show";
     sign_in.id="show";
}
}
function signup(){
    var account = document.getElementById('account').value;
    var password = document.getElementById('password').value;
    
    key = 0;
    if(account == "" && password != ""){
     alert("Tên đăng nhập không được trống");
 }
 else if(account !="" && password == ""){ 
     alert("Mật khẩu không được trống");
 }
 else if(account =="" && password ==""){
     alert("Tên đăng nhập và mật khẩu không được trống");
 }
 else{
    let user = new user_info(account,password,key);
    Data = JSON.stringify(localStorage.getItem("user_manage"));
    if( Data == 'null' || Data.search("[]") != -1){
        if(account !== admin.account){
              if(account.length >= 6){
                   if(password.length >=8){
                       user_manage.push(user);
                       localStorage.setItem("user_manage",JSON.stringify(user_manage));
                       alert("Đăng kí thành công!");
                   }
                   else{
                        alert("Mật khẩu cần có tối thiểu 8 kí tự");
                   }
              }
              else{
                   alert("Tên đăng nhập cần có tối thiểu 6 kí tự");
              }
        }
        else{
             alert("Tài khoản đã được đăng kí, hãy đăng kí lại bằng tên đăng nhập khác.");
        }
    }
    else{
         if(account !== admin.account){
              user_manage = JSON.parse(localStorage.getItem("user_manage"));
              flag = 0;
              for(i = 0; i < Object.keys(user_manage).length;i++ ){
                   if(account === user_manage[i].account){
                        alert("Tài khoản đã được đăng kí, hãy đăng kí lại bằng tên đăng nhập khác.");
                        flag = 1;
                        break;
                   }                    
              }
              if(flag == 0){
                   if(account.length >= 6){
                        if(password.length >=8){
                            user_manage.push(user);
                            localStorage.setItem("user_manage",JSON.stringify(user_manage));
                            alert("Đăng kí thành công!");
                        }
                        else{
                             alert("Mật khẩu cần có tối thiểu 8 kí tự");
                        }
                   }
                   else{
                        alert("Tên đăng nhập cần có tối thiểu 6 kí tự");
                   }
              }  
        }
        else{
              alert("Tài khoản đã được đăng kí, hãy đăng kí lại bằng tên đăng nhập khác.");
        }
    }
}
}
t = 0;
localStorage.setItem("flag-button",t);
function newheader() {
     m = JSON.stringify(localStorage.getItem("flag-button"));
     p=0;
     if(m.search("1") > 0){
         homepage.id="show";
         shop.id="show";
         sign_in.id="show";
         p =0;
   }
     if(m.search("0") > 0){
         homepage.id="show-block";
         shop.id="show-block";
         sign_in.id="show-block";
         p =1;
     }
     localStorage.setItem("flag-button",p);
   }