var d="Mounika is beautiful"
console.log(d)

console.log(d)

c=[];
temp=""
function reverse(){

for(i=0;i<d.length;i++){
if(d[i]==" ")
{
c.push(temp);
temp=""
}
else
{
temp=temp+d[i];
}
}
c.push(temp)
console.log(c);


}


reverse();