function string()
{
console.log("hi")
var d="Mounika" //compares with ASCII characters
var e="Mounika"
i=0
j=0
while(i < d.length && j<e.length)
{
if(d[i]==e[j])
{
i=i+1
j=j+1
}
else if(d[i]>e[j])
{
return -1
}
else if(d[j]<e[j])
return 1
}

if(i==j)
{
if(d.length<e.length)
{
return 1;
}
else if(d.length == e.length)
return 0
else
{
return -1;
}
}


}

console.log("hi");


var result = string()
console.log(result);




