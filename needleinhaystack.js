function ip(){
for(i=0;i<str.length;i++)
{
if(str[i] == needle[0])
{
if(str.slice(i,i+needle.length) == needle)
{

return 1;
}
}
}
return -1
}
str="hello";
needle="ll1";

var res=ip();
console.log(res)
