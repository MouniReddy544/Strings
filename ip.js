function ip(){
p=str.split(".");
console.log(p);

for(i=0;i<p.length;i++){
if(isNaN(parseInt(p[i]))==false)
{
if(parseInt(p[i])<0 ||  parseInt(p[i])>255){
return false;
}
}
else
{
return false
}
}
return true;
}
str="aaaa";
var result=ip();
console.log(result)