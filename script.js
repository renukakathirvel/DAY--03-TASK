var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    for(var i=0;i<res.length;i++){
        console.log(res[i].region);
    for(var j=0;j<res.length;j++){
        console.log(res[j].name.common);
        for(var k=0;k<res.length;k++){
            console.log(res[k].subregion);  
        }  
    }    
}
}