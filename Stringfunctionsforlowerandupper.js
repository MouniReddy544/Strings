function reverse(){

temp="";
for(i=0;i<=a.length-1;i++)
{
if(a[i]==a[i].toUpperCase())
{
b=a[i].toLowerCase();
}
else{
b=a[i].toUpperCase();

}
temp=temp+b;


}
console.log(temp);
}
a="Moukkoka";
reverse();
