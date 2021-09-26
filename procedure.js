var final;
var t=60;
var arr=["enterprenuer","happy","birthday","ashish","schedule","absolute",
"abstract",
"academic",
"accepted",
"accident",
"accuracy",
"accurate",
"achieved",
"beneficial",
"invite",
"number",
"vague",
"testy",
"second",
"afraid",
"profuse",
"visit",
"great",
"melted"];
var count=0;
var ran;
ran=Math.floor(Math.random()*24);
var ques=document.querySelector(".question");
jumble(arr[ran]);
setInterval(settimer,1000);

function butcli(){
  document.querySelector("#status").style.backgroundColor="burlywood";
var answer=document.querySelector(".answer").value;
console.log(answer);
checkans(arr[ran],answer);
ran=Math.floor(Math.random()*24);
//console.log("ashish");
//console.log(typeof(answer));
jumble(arr[ran]);
document.querySelector(".answer").setAttribute("text"," ");
}
function jumble(a){
var l=a.length;
var i=Math.floor(Math.random()*l-1);
  final=a.substring(i,l)+a.substring(0,i);  
ques.innerHTML=final;
}
function checkans(c,d){
  console.log(c+d);
  var res=c.localeCompare(d);
  console.log(res);
  if((c+" ").localeCompare(d)==0 || c.localeCompare(d)==0 || (" "+c).localeCompare(d)==0)
  {
    count++;
    document.querySelector("#score").innerHTML=(count*10).toString();
    document.querySelector("#status").style.backgroundColor="green";
    console.log("count is  "+count);
    document.querySelector("#status").innerHTML="CORRECT";
  }
  else{
    document.querySelector("#status").style.backgroundColor="red";
    document.querySelector("#status").innerHTML="WRONG";
  }
}
function settimer(){
  if(t==0){
    document.querySelector("#response").style.display="block";
    document.querySelector("#showscore").innerHTML= "YOUR TOTAL SCORE IS : "+(count*10).toString();
    document.querySelector(".game").style.display="none";
  }
  else{
  t--;
  document.querySelector("#timesec").innerHTML=t.toString()+" secs";
}}
