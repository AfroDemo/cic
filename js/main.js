function opt(){
    var e = document.getElementById("money");
    var hand = e.value;
    if(hand == 'tshs'){
        alert('Changing currency to Tanzania Shillings: ' + hand);
        var curr = document.getElementById("current").rows[0].cells[2].querySelector('.currency');
        
        for(var i = 0; i < curr.length; i++){
            if(curr[i].innerHTML.indexOf('KshS') > -1){
                
                var current = document.getElementById("current").rows[0].cells[2].querySelector('.currency').innerHTML;
                var result = current * 20.35;
            
                document.getElementById("current").rows[0].cells[2].querySelector(".currency").innerHTML = result + ' TshS';

            }
        }

    }else if(hand == "usd"){
        alert('Changing currency to United States Dollar: ' + hand);
        var current = document.getElementById("current").rows[0].cells[2].querySelector('.currency').innerHTML;
        var result = current / 2300;
    
        document.getElementById("current").rows[0].cells[2].querySelector(".currency").innerHTML = result + ' USD';
    }else if(hand == "kshs"){
        alert('Changing currency to Kenyan Shillings: ' + hand);
        var current = document.getElementById("current").rows[0].cells[2].querySelector('.currency').innerHTML;
        var result = current * 113.3;
    
        document.getElementById("current").rows[0].cells[2].querySelector(".currency").innerHTML = result + ' KshS';
    }
}