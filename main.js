name_of_Guests=[];
function list(){
var Guestname= document.getElementById("names").value;
name_of_Guests.push(Guestname);
console.log(name_of_Guests);
document.getElementById("display_names").innerHTML=name_of_Guests;
document.getElementById("names").value="";
}

function show(){
var length=name_of_Guests.length;
console.log(length);
var array_value="";
for(var i=0;i<length;i++){
    console.log(name_of_Guests[i]);
    array_value=array_value+name_of_Guests[i]+"<br>"
}
document.getElementById("display_order").innerHTML=array_value; 
}

function sort(){
    name_of_Guests.sort();
    var i=name_of_Guests.join("<br>");
    console.log(name_of_Guests);
    document.getElementById("Sorted_list").innerHTML=i.toString();
}

function search(){
    var s= document.getElementById("namessearch").value;
    var found=0;
    var j;
    for(j=0;j<length;j++){
        if(s==name_of_Guests[j]){
            found=found+1;
            
        }
        
    }
    document.getElementById("foundornot").innerHTML="Name Found = "+ found +"time/s";
            console.log("found name="+ found + "time/s");
    
}

