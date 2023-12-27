

function search() {
  //thay doi noi dung the cho tim kiem
  var input, name, in4, inputck;
  input = document.getElementById("myInput").value.toLocaleUpperCase();
  var setup;
  setup = 'kết quả tìm kiếm cho ';
  setup = setup + input;
  document.getElementById("title_sale").innerHTML = setup;
  setup = document.getElementById("title_sale").innerHTML;
  setup = document.getElementById("title_sale").style.fontSize = '15px';
  setup = document.getElementById("title_sale").style.textTransform = 'unset';
  in4 = document.getElementsByClassName("main_album");
  name = document.getElementsByClassName("name_album");
  // ẩn toàn bộ thẻ 
  //inputck chứa toàn bộ độ dài của input
  // 
  var scan, sting; // biến để kiểm tra số kí tự giống nhau
  for (i = 0; i < in4.length; i++) {
    change = in4[i].style.display = 'none';
  }
  for (i = 0; i < in4.length; i++) {
    sting = name[i].innerHTML.toLocaleUpperCase();
    scan = 0;
    for (j = 0; input.length; j++) {
      if (input[j] === sting[j]) {
        scan++;
      }else {
        break
      }
    }
    if (scan > 0) {
      loctoanbo = in4[i].style.display = 'block';
    }
  }
  inputck = document.getElementsByClassName("topsale");
  for (i = 1; i < inputck.length; i++) {
    unset = inputck[i].style.display = "none";
  }
}


// gốc ở đây có 1 hàm cũ, hàm cũ được cập nhật và di đơi xuống phía cuối



function check(namediv){
  var tag_a, tag_img, tag_for_a1,tag_for_a2,tag_for_a3, tag_for_img;
  tag_a = namediv.getElementsByTagName("a");
  tag_img = namediv.getElementsByTagName("img");
  tag_for_a1 = tag_a[0].innerHTML;
  tag_for_a2 = tag_a[1].innerHTML;
  tag_for_a3 = tag_a[2].innerHTML;
  tag_for_img = tag_img[0].src;
  window.localStorage.setItem('name', tag_for_a1);
  window.localStorage.setItem('gia', tag_for_a2);
  window.localStorage.setItem('loai', tag_for_a3);
  window.localStorage.setItem('src_img',tag_for_img);
}
function change_function(){
  var name, type, sourc_img, pric;
  var a1, a2, a3, a4;
  name = window.localStorage.getItem('name');
  type = window.localStorage.getItem('loai');
  sourc_img = window.localStorage.getItem('src_img');
  pric = window.localStorage.getItem('gia');

  a1 = document.getElementById("change_id");
  a2 = document.getElementById("name");
  a3 = document.getElementById("pricd");
  a4 = document.getElementById("type");

  a1.src = sourc_img;
  a2.innerHTML = name;
  a3.innerHTML = pric;
  a4.innerHTML = type;
  var Number1 = 0;
  window.localStorage.setItem('soluong',Number1);
}

function paynow(){
  var undis = document.getElementById("payfor");
  change = undis.style.display = "";
}
Number1 = 1;
window.localStorage.setItem('soluong',Number1);


function cong(){
  var newnumber;
  newnumber = window.localStorage.getItem('soluong');
  newnumber++;
  window.localStorage.setItem('soluong',newnumber);
  var changesoluong = document.getElementById("soluong");
  newchange = changesoluong.innerHTML = newnumber;
}
function tru(){
  var newnumber;
  newnumber = window.localStorage.getItem('soluong');
  if(newnumber > 0)
  {
      newnumber--;
  window.localStorage.setItem('soluong',newnumber);
  }
  var changesoluong = document.getElementById("soluong");
  newchange = changesoluong.innerHTML = newnumber;
}
function joke_down(){
  var input1, input2, input3;
  input1 = document.getElementById("name_user").value; // ten ng mua
  window.localStorage.setItem('tennguoimua', input1);

  input2 = document.getElementById("local").value; // dia chi nha
  window.localStorage.setItem('diachinha', input2);

  input3 = document.getElementById("phone_number").value; // so dien thoai 
  window.localStorage.setItem('sdt', input3);

  alert("mày đã đặt đĩa thành công, mấy hôm nữa bọn tao giao, lo chuẩn bị tiền đầy đủ. Bom hàng là tao chém")
}
function addcard(){
  
}

// các hàm sau cập nhật cần copy zô

function pricard(abprice) {
  var getpricd = document.getElementsByClassName("price");
  var getelement = document.getElementsByClassName("main_album");
  
    newgetpricd = getpricd[3].innerHTML;
    newgetpricd++;
    newgetpricd--;
       for(i = 0; i< getpricd.length; i++)
       {
        if(getpricd[i].innerHTML <= abprice)
        {
          newdisplay = getelement[i].style.display = "";
        }
        else
        {
          newdisplay = getelement[i].style.display = "none";
        }
       }
    
  }
//   function locall(type, nametype) {
//   var undisplay = document.getElementsByClassName("topsale");
//   for(i = 0; i < undisplay.length; i++){
//   un = undisplay[i].style.display = "none";
//   }
//   var in4, name;
//   in4 = document.getElementsByClassName(type);
//   for (i = 0; i < in4.length; i++) {
//     change = in4[i].style.display = 'none';
//   }
//   name = document.getElementsByClassName(nametype);
//   for (i = 0; i < name.length; i++) {
//     loctoanbo = name[i].style.display = 'block';
//   }
// }

function locall(filter){
  var undisplay = document.getElementsByClassName("main_album");
  var savefilter =  filter.innerHTML;
  console.log(undisplay);
  console.log(savefilter);
  var elementaccep = document.getElementsByClassName("load_new");
  for(i = 0; i < elementaccep.length; i++){
    if(elementaccep[i].innerHTML === savefilter){
      changedisplay = undisplay[i].style.display = "";
      console.log(changedisplay);
    }
    else{
      changedisplay = undisplay[i].style.display = "none";
    }
  }
}


function loadpage(htmlpage){
  var namepage;
  namepage = htmlpage.innerHTML;
  window.localStorage.setItem("phantrang",namepage);
}

function uploadpage(){
  var changeload = document.getElementsByClassName("load_new");
  var checkname;
  checkname  = window.localStorage.getItem("phantrang");
  if(checkname != null){
    for(i = 0; i < changeload.length; i++){
      changeload[i].innerHTML = checkname;
  }
}
}

function test(){
  var newtest;
  newtest = window.localStorage.getItem("abid");
  console.log(newtest);
}

function newcuahangreload(){
  localStorage.removeItem("phantrang");
}


// tìm theo khoảng giá được nhập vào

function search_theogia(){
  var gia = document.getElementsByClassName("price");
  // lấy giá trị của bộ lọc
  var  giatheomang; 
  var undisplay = document.getElementsByClassName("main_album");
  var mingia = document.getElementById("min").value; // lấy giá trị của ô input min
  var maxgia = document.getElementById("max").value; // lấy giá trị của ô input max
  maxnew = maxgia; // chuyển thành number;
  maxnew++;
  maxnew--;
  minnew= mingia;
  minnew++;
  minnew--; // minnew và maxnew là 2 đầu giá trị lọc cho bộ tìm kiếm
  if(minnew <= maxnew){
  for(i = 0; i < gia.length; i++){
  giatheomang = gia[i].innerHTML;
  giatheomang++; giatheomang--;
    if(giatheomang >= minnew){
      if(giatheomang <= maxnew){
        unchange = undisplay[i].style.display = "";
      }
      else{
        unchange = undisplay[i].style.display = "none";
      }
    }
    else{
      unchange = undisplay[i].style.display = "none";
    }
  }
  }
  else{
    alert("Nhập sai rồi kìa ba \nNhỏ nhất bé hơn lớn nhất là sao cha ????");
  }


}

 
///////////tim theo khoang gia/////////////////////