var subTotal = 0;

var arrData = [];

var arrHistory = [];

function getData() {
    const jsonDataCart = localStorage.getItem("cart");
    if(jsonDataCart) {
        arrData = JSON.parse(jsonDataCart);
    }
}


function addToCart() {
    getData();
    var sampleData = {
        image: localStorage.getItem("src_img"),
        name: localStorage.getItem("name"),
        price: localStorage.getItem("gia"),
        quantity: 1
    }
    // Tìm data đã có trong mảng chưa nếu có rồi thì dataExsit này sẽ trả về thằng đó nếu không có trả về undefined
    const dataExist = arrData.find(data =>data.name === sampleData.name);// trả về giá trị tìm được hoặc undefined
    //Kiểm trả có dataExist có giá trị không
    if(dataExist !== undefined){
        //dâtExist có giá trị thì tăng số lượng lên 1
        dataExist.quantity++;
    }else {
        // Không có GIÁ TRỊ thì thêm data mới vào
         arrData.push(sampleData);
    }
    savetoLocal();
}

function tocart(){
    let Data = JSON.stringify(localStorage.getItem("user_manage"));
if (Data != 'null' || Data.search("[]") == false){
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
if(key == 1 || key ==2){
    window.location.href="cart.html";
}
else{
    alert("Bạn cần đăng nhập hoặc đăng kí để tới trang giỏ hàng");
}
}
}
function addproductToCart(){
    let Data = JSON.stringify(localStorage.getItem("user_manage"));
    if (Data != 'null' || Data.search("[]") == false){
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
    if(key == 1 || key ==2){
        addToCart();
        alert("Thêm vào giỏ hàng thành công!");
    }
    else{
        alert("Bạn cần đăng nhập hoặc đăng kí để thêm vào giỏ hàng");
    }
    }
}
function savetoLocal(){
    const jsonArrData = JSON.stringify(arrData);
    localStorage.setItem("cart", jsonArrData)
}

function showDataToCart() {
    const jsonData = localStorage.getItem("cart");
    const datas = JSON.parse(jsonData);
    var y = document.getElementById("cart-body");
    // function renderHtml (data){
    //     return  ` 
    //         <tr>
    //             <td> Remove </td>
    //             <td> <img src="${data.image}" alt="test"/> </td>
    //             <td> ${data.name} </td>
    //             <td> ${data.price} </td>    
    //             <td> ${data.quantity} </td>
    //             <td> ${data.quantity * data.price} </td>
    //         </tr>`
    // }

    for(var i = 0; i < datas.length ;i++){
        var data = datas[i];
        var total = data.quantity * data.price;
        subTotal += total;
        y.innerHTML += ` 
            <tr>
                <td> <button onclick="removeCartItem(${i})"> <i class="fa fa-trash"> </i> </button>  </td>
                <td> <img src="${data.image}" alt="test"/> </td>
                <td> ${data.name} </td>
                <td> ${data.price}$ </td>    
                <td> ${data.quantity} </td>
                <td> ${total}$ </td>
            </tr>`;
    }

    // const html = datas.map(data => y.innerHTML += ` 
    //         <tr>
    //             <td> Remove </td>
    //             <td> <img src="${data.image}" alt="test"/> </td>
    //             <td> ${data.name} </td>
    //             <td> ${data.price} </td>    
    //             <td> ${data.quantity} </td>
    //             <td> ${data.quantity * data.price} </td>
    //         </tr>`);
    renderCartTotal()
}


function payment() {
    let Data = JSON.stringify(localStorage.getItem("user_manage"));
    let strinF = JSON.stringify(localStorage.getItem("cart"));
    if (Data != 'null' || Data.search("[]") == false){
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
    if(key == 1 || key ==2){
        if(strinF !='null' && strinF.search("[]") == -1 ){
            const jsonDataHistory = localStorage.getItem("History");
            if(jsonDataHistory) {
                arrHistory = JSON.parse(jsonDataHistory);
            }
        const temp = JSON.parse(localStorage.getItem("cart"));
        arrHistory.push(temp);
        localStorage.setItem("History",JSON.stringify(arrHistory));
        localStorage.removeItem('cart');
        alert("Thanh toán thành công!");
        window.location.href="cart.html";
        }
        else{
            alert("Bạn cần có sản phẩm trong giỏ hàng để được thanh toán!");
        }
    }
    else{
        window.location.href="trangchu.html"
    }
    }
}

function renderCartTotal() {
    var receipt = document.getElementsByClassName("receipt")[0];
    var shipping = 5;
    receipt.innerHTML = "";
    receipt.innerHTML += `<h4> CART TOTAL </h4>
    <div>
        <h5>Subtotal</h5>
        <p>${subTotal}$</p>
    </div>
    <div>
        <h5>Shipping</h5>
        <p>${shipping}$</p>
    </div>
    <hr>
    <div>
        <h5>Total</h5>
        <p>${subTotal + shipping}$</p>
    </div>
    <button onclick="payment()"> THANH TOÁN </button>`
}

function removeCartItem(index) {
    var jsonData = localStorage.getItem("cart");
    var datas = JSON.parse(jsonData);
    var newData = [];
    for (let i = 0; i < datas.length; i++) {
        var data = datas[i];
        if(i !== index) {
            newData.push(data);
        }
    }
    const newDataJson = JSON.stringify(newData);
    var jsonData = localStorage.setItem("cart",newDataJson);

    var y = document.getElementById("cart-body");
    y.innerHTML = "";
    subTotal = 0;
    showDataToCart();
}