var d="mounika" //compares with ASCII characters
var e="Mounika"
console.log("hi")
i=0
j=0
while(i < d.length || j<e.length)
{
if(d[i]==e[j])
{
i=i+1
j=j+1
}

else if(d[i]>e[j])
{
console.log("d is greater");
break;
}

else if(d[j]<e[j])
console.log("d is lesser");
break
}

if(i==j)
{
if(d.length<e.length)
{
console.log("d is lesser");
}
else
{
console.log("d is greater");
}
}




