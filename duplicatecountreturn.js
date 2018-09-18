function twosum(){
a="ab";
count = new Array(256).fill(0);

for(i=0;i<a.length;i++)
{
count[a.charCodeAt(i)]=count[a.charCodeAt(i)]+1
console.log(a.charCodeAt(i));

}


for(i=0;i<256;i++)
{
if(count[i]>1)
return 1
}

return 0;

}

var x=twosum()
console.log(x)

