function reverse(){

temp="";
for(i=0;i<=a.length-1;i++)
{
if(a.charCodeAt(i)>=65 && a.charCodeAt(i)<=90)
{
b=a.charCodeAt(i)+32;

}
else{
b=a.charCodeAt(i)-32;

}
temp=temp+String.fromCharCode(b);


}
console.log(temp);
}
a="Moukkoka";
reverse();
