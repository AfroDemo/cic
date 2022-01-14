var current = 1000000;

function opt(){

    var e = document.getElementById("money");
    var hand = e.value;

    if(hand == 'tshs'){
        alert('Changing currency to Tanzania Shillings: ' + hand);
              
        var result = current * 2300;
    
        document.getElementById("current").rows[0].cells[2].querySelector(".currency").innerHTML = result.toLocaleString() + ' TshS';

        var opt = document.getElementById("prediction").options;
        //alert(opt[0].value + opt[1].text);

        var mon = opt[0].value;
        var result = mon * 2300;
        document.getElementById("prediction").options[0].innerHTML = 'Mon ' + result.toLocaleString();
        var tue = opt[1].value;
        var result = tue * 2300;
        document.getElementById("prediction").options[1].innerHTML = 'Tue ' + result.toLocaleString();
        var wed = opt[2].value;
        var result = wed * 2300;
        document.getElementById("prediction").options[2].innerHTML = 'Wed ' + result.toLocaleString();


    }else if(hand == "usd"){
        alert('Changing currency to United States Dollar: ' + hand);

        var result = current;
    
        document.getElementById("current").rows[0].cells[2].querySelector(".currency").innerHTML = result.toLocaleString() + ' USD';

        var opt = document.getElementById("prediction").options;
        //alert(opt[0].value + opt[1].text);

        var mon = opt[0].value;
        var result = mon * 2300;
        document.getElementById("prediction").options[0].innerHTML = 'Mon ' + result.toLocaleString();
        var tue = opt[1].value;
        var result = tue * 2300;
        document.getElementById("prediction").options[1].innerHTML = 'Tue ' + result.toLocaleString();
        var wed = opt[2].value;
        var result = wed * 2300;
        document.getElementById("prediction").options[2].innerHTML = 'Wed ' + result.toLocaleString();

    }else if(hand == "kshs"){
        alert('Changing currency to Kenyan Shillings: ' + hand);

        var result = current * 113.3;
    
        document.getElementById("current").rows[0].cells[2].querySelector(".currency").innerHTML = result.toLocaleString() + ' KshS';

        var opt = document.getElementById("prediction").options;
        //alert(opt[0].value + opt[1].text);

        var mon = opt[0].value;
        var result = mon * 113.3;
        document.getElementById("prediction").options[0].innerHTML = 'Mon ' + result.toLocaleString();
        var tue = opt[1].value;
        var result = tue * 113.3;
        document.getElementById("prediction").options[1].innerHTML = 'Tue ' + result.toLocaleString();
        var wed = opt[2].value;
        var result = wed * 113.3;
        document.getElementById("prediction").options[2].innerHTML = 'Wed ' + result.toLocaleString();

    }
}

function getOutPut(){
    var inputVal = document.getElementById("input").value;
    if(inputVal.length > 0 || inputVal != 0){
    var predVal = document.getElementById("prediction").value;

    document.getElementById("out").rows[0].cells[1].querySelector("#curren").innerHTML = current.toLocaleString() + ' USD';
    document.getElementById("out").rows[1].cells[1].querySelector("#harvest").innerHTML = predVal.toLocaleString() + ' USD';
    document.getElementById("out").rows[2].cells[1].querySelector("#invested").innerHTML = inputVal.toLocaleString() + ' USD';

    var per = (inputVal/current) * 100;
    var prof = per * predVal;

    document.getElementById("out").rows[3].cells[1].querySelector("#profit").innerHTML = prof.toLocaleString() + ' USD';
    }else{
        alert("Please enter investment amount and it can't be zero");
    }

}