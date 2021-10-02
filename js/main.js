var num = 1;
function tang(){
    var form = document.getElementById('form');
    num++;
    form.xuat.value = num;
}
function giam(){
    if(num > 1){
        var form = document.getElementById('form');
        num--;
        form.xuat.value = num;
    }
}

var bonho = 0;
function themhang(){
    var form = document.getElementById('form');
    var sl = parseInt(form.xuat.value);
    bonho += sl; 
    var a = document.getElementById('soluong');
    a.innerHTML = bonho;
    
}


function danhgia(num){
    var sao = document.getElementById('sao');
    if(sao.hasChildNodes()){
        for(let i = 0;i<num;i++){
            sao.children[i].style.color = 'gold';
        }
        for(let i = num;i<5;i++){
            sao.children[i].style.color = 'black';
        }
    }
}
//load ảnh web con
function loadhinh(image){
    var src = image.src;
    var htb = document.getElementById('hinhtrungbay');
    htb.attributes[0].value = src;
}

function kiemtra(){
    var email_sdt = document.getElementById('email_sdt').value;
    if(email_sdt == ""){
        alert('nhapsai');
        return false;
    }
    return true;
}
// 

