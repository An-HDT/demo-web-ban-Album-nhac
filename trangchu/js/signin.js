class user_info{
    constructor(account,password,flag){
         this.account = account;
         this.password = password;
         this.flag = flag;
    }
}
    const homepage = document.getElementById("homepage");
    const shop = document.getElementById("shop");
    const sign_up = document.getElementById("signup");
let admin = new user_info("admin","tuitaolaadminthichbandia",0);
let user_manage = [];
let Data = JSON.stringify(localStorage.getItem("user_manage"));
if (Data != 'null'|| Data.search("[]") != -1){
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
    sign_up.id="show";
}
}
function signin(){
    var account = document.getElementById('account').value;
    var password = document.getElementById('password').value;
    key = 0;
    if(account == "" && password != ""){
        alert("Tên đăng nhập không được trống");
    }
    else if(account !="" && password ==""){ 
        alert("Mật khẩu không được trống");
    }
    else if(account =="" && password ==""){
        alert("Tên đăng nhập và mật khẩu không được trống");
    }
    else{
    Data = JSON.stringify(localStorage.getItem("user_manage"));
    if(Data == 'null' || Data.search("[]") != -1){
        if(account === admin.account){
            if(password === admin.password){
                alert("Đăng nhập thành công");
                admin.flag = 2;
                user_manage.push(admin);
                localStorage.setItem("user_manage",JSON.stringify(user_manage));
                window.location.href="trangchu.html";
            }
            else{
                alert("Sai mật khẩu!");
            }
        }
        else{
            alert("Tài khoản chưa được đăng kí");
        }
    }
    else{
        if(account === admin.account){
            if(password === admin.password){
                alert("Đăng nhập thành công");
                admin.flag = 2;
                user_manage = JSON.parse(localStorage.getItem("user_manage"));
                user_manage.push(admin);
                localStorage.setItem("user_manage",JSON.stringify(user_manage));
                window.location.href="trangchu.html";
            }
            else{
                alert("Sai mật khẩu!");
            }
        }
        else{
            user_manage = JSON.parse(localStorage.getItem("user_manage"));
            flag = 0;
            for(i = 0; i < Object.keys(user_manage).length;i++){
                if(account === user_manage[i].account){
                    flag = 1;
                    if(password === user_manage[i].password){
                        alert("Đăng nhập thành công");
                        user_manage[i].flag = 1;
                        localStorage.removeItem("user_manage");
                        localStorage.setItem("user_manage",JSON.stringify(user_manage));
                        window.location.href="trangchu.html";
                        break;
                    }
                    else{
                        alert("Sai mật khẩu!");
                        break;
                    }
                }
            }
            if(flag == 0){
                alert("Không tìm thấy tên đăng nhập. Nếu chưa có tài khoản, hãy đăng ký.");
            }
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
      sign_up.id="show";
      p =0;
}
  if(m.search("0") > 0){
      homepage.id="show-block";
      shop.id="show-block";
      sign_up.id="show-block";
      p =1;
  }
  localStorage.setItem("flag-button",p);
}