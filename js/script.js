console.log("Make use of this website.");


function func() {
//first year grades variables
var ff4c1 = document.getElementById("ff4c1").value;
var ff4c2 = document.getElementById("ff4c2").value;
var ff3c1 = document.getElementById("ff3c1").value;
var ff3c2 = document.getElementById("ff3c2").value;
var ff3c3 = document.getElementById("ff3c3").value;
var ff3c4 = document.getElementById("ff3c4").value;
var ff2c1 = document.getElementById("ff2c1").value;
var ff2c2 = document.getElementById("ff2c2").value;

var fs4c1 = document.getElementById("fs4c1").value;
var fs4c2 = document.getElementById("fs4c2").value;
var fs4c3 = document.getElementById("fs4c3").value;
var fs3c1 = document.getElementById("fs3c1").value;
var fs3c2 = document.getElementById("fs3c2").value;
var fs2c1 = document.getElementById("fs2c1").value;
var fs2c2 = document.getElementById("fs2c2").value;
var fs2c3 = document.getElementById("fs2c3").value;

//second year grades variables

var sf4c1 = document.getElementById("sf4c1").value; 
var sf4c2 = document.getElementById("sf4c2").value;
var sf4c3 = document.getElementById("sf4c3").value;
var sf3c1 = document.getElementById("sf3c1").value;
var sf3c2 = document.getElementById("sf3c2").value;
var sf2c1 = document.getElementById("sf2c1").value;
var sf2c2 = document.getElementById("sf2c2").value;
var sf2c3 = document.getElementById("sf2c3").value;

var ss4c1 = document.getElementById("ss4c1").value;
var ss4c2 = document.getElementById("ss4c2").value;
var ss4c3 = document.getElementById("ss4c3").value;
var ss3c1 = document.getElementById("ss3c1").value;
var ss3c2 = document.getElementById("ss3c2").value;
var ss2c1 = document.getElementById("ss2c1").value;
var ss2c2 = document.getElementById("ss2c2").value;
var ss2c3 = document.getElementById("ss2c3").value;


//Third year grades variables 

var tf4c1 = document.getElementById("tf4c1").value; 
var tf4c2 = document.getElementById("tf4c2").value;
var tf4c3 = document.getElementById("tf4c3").value;
var tf3c1 = document.getElementById("tf3c1").value;
var tf3c2 = document.getElementById("tf3c2").value;
var tf2c1 = document.getElementById("tf2c1").value;
var tf2c2 = document.getElementById("tf2c2").value;
var tf2c3 = document.getElementById("tf2c3").value;

var ts4c1 = document.getElementById("ts4c1").value;
var ts4c2 = document.getElementById("ts4c2").value;
var ts4c3 = document.getElementById("ts4c3").value;
var ts3c1 = document.getElementById("ts3c1").value;
var ts3c2 = document.getElementById("ts3c2").value;
var ts2c1 = document.getElementById("ts2c1").value;
var ts2c2 = document.getElementById("ts2c2").value;
var ts2c3 = document.getElementById("ts2c3").value;


// final year grades variables

var fi4c1 = document.getElementById("fi4c1").value;
var fi4c2 = document.getElementById("fi4c2").value; 
var fi3c1 = document.getElementById("fi3c1").value;
var fi3c2 = document.getElementById("fi3c2").value;
var fi3c3 = document.getElementById("fi3c3").value;
var fi2c1 = document.getElementById("fi2c1").value;
var fi2c2 = document.getElementById("fi2c2").value;
var fi2c3 = document.getElementById("fi2c3").value;
var  fi1  = document.getElementById("fi1").value;

var fis3c1 = document.getElementById("fis3c1").value;
var fis3c2 = document.getElementById("fis3c2").value;
var fis3c3 = document.getElementById("fis3c3").value;
var fis15  = document.getElementById("fis15").value;



var ffresult = (((4*ff4c1)+(4*ff4c2)+(3*ff3c1)+(3*ff3c2)+(3*ff3c3)+(3*ff3c4)+(2*ff2c1)+(2*ff2c2))/Number(24)).toFixed(2);
var fsresult = (((4*fs4c1)+(4*fs4c2)+(4*fs4c3)+(3*fs3c1)+(3*fs3c2)+(2*fs2c1)+(2*fs2c2)+(2*fs2c3))/Number(24)).toFixed(2);
var firstyear = ((Number(ffresult))+(Number(fsresult))).toFixed(2);

var sfresult = (((4*sf4c1)+(4*sf4c2)+(4*sf4c3)+(3*sf3c1)+(3*sf3c2)+(2*sf2c1)+(2*sf2c2)+(2*sf2c3))/Number(24)).toFixed(2);
var ssresult = (((4*ss4c1)+(4*ss4c2)+(4*ss4c3)+(3*ss3c1)+(3*ss3c2)+(2*ss2c1)+(2*ss2c2)+(2*ss2c3))/Number(24)).toFixed(2);
var secondyear = ((Number(sfresult))+(Number(ssresult))).toFixed(2);

var tfresult = (((4*tf4c1)+(4*tf4c2)+(4*tf4c3)+(3*tf3c1)+(3*tf3c2)+(2*tf2c1)+(2*tf2c2)+(2*tf2c3))/Number(24)).toFixed(2);
var tsresult = (((4*ts4c1)+(4*ts4c2)+(4*ts4c3)+(3*ts3c1)+(3*ts3c2)+(2*ts2c1)+(2*ts2c2)+(2*ts2c3))/Number(24)).toFixed(2);
var thirdyear =((Number(tfresult))+(Number(tsresult))).toFixed(2);;

var fifresult = (((4*fi4c1)+(4*fi4c2)+(3*fi3c1)+(3*fi3c2)+(3*fi3c3)+(2*fi2c1)+(2*fi2c2)+(2*fi2c1)+(1*fi1))/Number(24)).toFixed(2);
var fisresult = (((3*fis3c1)+(3*fis3c2)+(3*fis3c3)+(15*fis15))/Number(24)).toFixed(2);
var finalyear = ((Number(fifresult))+(Number(fisresult))).toFixed(2);
//document.write("<h1>result is :</h1>" +ffresult);
document.getElementById("answer").innerHTML = 
"\nFirst year 1st sem:-"+ffresult + "\nFirst 2nd Sem:-" +fsresult + "\nTotal:-" +firstyear +
"\n<br>Second year 1st sem:-"+sfresult + "\nSecond year 2nd Sem:-" +ssresult + "\nTotal:-" +secondyear+
 "\n<br>Third year 1st Sem:-" +tfresult + "\nThird year 2nd Sem:- "+tsresult + "\nTotal:-" +thirdyear+
 "\n<br>Fourth year 1st Sem:-" +fifresult + "\nFourth year 2nd Sem:- "+fisresult + "\nTotal:-" +finalyear;
}