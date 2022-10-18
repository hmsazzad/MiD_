let product=0;
let price=0,vat=0;
function countAll(pp )
{
    product++;
    document.getElementById("tproduct").innerHTML = product;
    price=price+pp;
    document.getElementById("price").innerHTML= price;
    vat=price*0.1;
    document.getElementById("vat").innerHTML=vat;
    document.getElementById("tprice").innerHTML=vat+price;
    
}