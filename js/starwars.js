
function getData(cb){
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("data").innerHTML = this.responseText;
            cb(JSON.parse(this.responseText));
        }
    };
    
    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/");
    
    xhr.send();
}
function printDataToConsole(data){
  console.log(data);  
};
getData(printDataToConsole);