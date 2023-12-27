var arrHD = [];

function getHD() {
    const jsonDataCart = localStorage.getItem("History");
    if(jsonDataCart) {
        arrHD = JSON.parse(jsonDataCart);
    }
}
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
    const sign_up = document.getElementById("signup");
    const to_admin = document.getElementById("admin");
    const user = document.getElementById("user");
    const sign_out = document.getElementById("signout");
    const bill = document.getElementById("bill");
    const cd= document.getElementById("cd");
    const cassette = document.getElementById("cassette");
    const lower5 = document.getElementById("lower5");
    const lower9 = document.getElementById("lower9");
    const lower12 = document.getElementById("lower12");
    const lower20 = document.getElementById("lower20");
  
let user_manage =[];
username="";
let Data = JSON.stringify(localStorage.getItem("user_manage"));
 if(Data =='null'){
     localStorage.setItem("user_manage",JSON.stringify(user_manage));
 }
 Data = JSON.stringify(localStorage.getItem("user_manage"));
if (Data != 'null'){
    user_manage = JSON.parse(localStorage.getItem("user_manage"));
    key = 0;
    for(i = 0;i < Object.keys(user_manage).length;i++){
    if(user_manage[i].flag == 1){
        key = 1;
        username = user_manage[i].account;
        break;
    }   
    if(user_manage[i].flag == 2){
        key = 2;
        break;
    }
}
    user.textContent=username;
if(key == 1){
    homepage.id="show";
    shop.id="show";
    user.id="show";
    to_admin.id="unshow";
    sign_in.id="unshow";
    sign_up.id="unshow";
    sign_out.id="show";
    bill.id="show";
}
if(key == 2){
    homepage.id="show";
    shop.id="show";
    user.id="unshow";
    to_admin.id="show";
    sign_in.id="unshow";
    sign_up.id="unshow";
    sign_out.id="show";
    bill.id="show"
}
if(key == 0){
    window.location.href="trangchu.html";
}
}
else{
    window.location.href="trangchu.html";
}

function signout(){
    key = 0;
    for(i = 0;i < Object.keys(user_manage).length;i++){
        if(user_manage[i].flag == 1){
            key = 1;
            user_manage[i].flag = 0;
            localStorage.removeItem('user_manage');
            localStorage.setItem("user_manage",JSON.stringify(user_manage));
            break;
        }   
        if(user_manage[i].flag == 2){
            key = 2;
            user_manage[i].flag = 0;
            localStorage.removeItem('user_manage');
            user_manage.pop();
            localStorage.setItem("user_manage",JSON.stringify(user_manage));
            break;
        }
    }
    if(key == 1){
        window.location.href="trangchu.html";

    }
    if(key == 2){
        window.location.href="trangchu.html";
    }
}
t = 0;
localStorage.setItem("flag-button",t);
function newheader() {
  m = JSON.stringify(localStorage.getItem("flag-button"));
  p=0;
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
  if(m.search("1") > 0){
    if(key == 1){
      to_admin.id="unshow";
      homepage.id="show";
      user.id="show";
      shop.id="show";
      sign_in.id="unshow";
      sign_up.id="unshow";
      sign_out.id="show";
      user.textContent=username;
    }
    if(key == 2){
      user.id="unshow";
      to_admin.id="show";
      homepage.id="show";
      shop.id="show";
      sign_in.id="unshow";
      sign_up.id="unshow";
      sign_out.id="show";
      user.textContent=username;
    }
    if(key == 0){
      homepage.id="show";
      shop.id="show"
      user.id="unshow";
      to_admin.id="unshow";
      sign_in.id="show";
      sign_up.id="show";
      sign_out.id="unshow";
      user.textContent=username;
    }
    if(cd !=null){
    cd.id ="show";
    cassette.id="show";
    lower5.id="show";
    lower9.id="show";
    lower12.id="show";
    lower20.id="show";
    }
    p =0;
}
  if(m.search("0") > 0){
    if(key == 1){
      to_admin.id="unshow";
      user.id="show-block";
      homepage.id="show-block";
      shop.id="show-block";
      sign_in.id="unshow";
      sign_up.id="unshow";
      sign_out.id="show-block";
      if(bill != null) bill.id="show-block";
      user.textContent=username;
    }
    if(key == 2){
      to_admin.id="show-block";
      user.id="unshow";
      homepage.id="show-block";
      shop.id="show-block";
      sign_in.id="unshow";
      sign_up.id="unshow";
      sign_out.id="show-block";
      if(bill != null) bill.id="show-block";
      user.textContent=username;
    }
    if(key == 0){
      user.id="unshow";
      to_admin.id="unshow";
      homepage.id="show-block";
      shop.id="show-block";
      sign_in.id="show-block";
      sign_up.id="show-block";
      sign_out.id="unshow";
      bill.id="unshow";
      user.textContent=username;
    }
    if(cd !=null){
    cd.id="show-block";
    cassette.id="show-block";
    lower5.id="show-block";
    lower9.id="show-block";
    lower12.id="show-block";
    lower20.id="show-block";
    }
    p =1;
  }
  localStorage.setItem("flag-button",p);
}
function showHD() {
    getHD()
    var y = document.getElementById("history");
    var count = 0;
    

    for(var i = 0; i < arrHD.length; i++){
        var datas = arrHD[i];
        var total = 0;
        count++;
        y.innerHTML += 
        `
        <div class="history-item" id="history-item${count}">
                <h4> ID: ${count} </h4>
                <hr style="background-color: black;">
                <table class="cart-items">
                    <thead>
                        <tr>
                            <td> Image </td>
                            <td> Name </td>
                            <td> Price </td>
                            <td> Quantity </td>
                            <td> Total </td>
                        </tr>
                        </thead>
                    <tbody id="body${count}">
                        
                    </tbody>
                </table>
        `;
        console.log("gay");
        for(var j = 0; j < datas.length; j++){
            var data = datas[j];
            var k = document.getElementById(`body${count}`);
            k.innerHTML += 
            `
                        <tr>
                            <td><img src="${data.image}" alt=""></td>
                            <td><h5>${data.name}</h5></td>
                            <td><h5>${data.price}$</h5></td>
                            <td><h5>${data.quantity}</h5></td>
                            <td><h5>${data.price*data.quantity}$</h5></td>
                        </tr>
            `;
            total += data.price*data.quantity;
        }
        var l = document.getElementById(`history-item${count}`);
        l.innerHTML += 
        `
        <hr style="background-color: black;">
        <div class="bottom"> <h4>Thành Tiền : ${total}$</h5> </div>
        `;
    }
}