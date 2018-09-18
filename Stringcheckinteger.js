function string(){
var a="-";
i=0

if(a[0] == '-' && a.length>1)
{
i=1
}

for(;i<a.length;i++)
{
if(a.charCodeAt(i) < 47 || a.charCodeAt(i) >58)
{
return 0
}

}

return 1
}


var x=string();
console.log(x);