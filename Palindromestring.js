function remove(){
i=0;
for(j=a.length-1;j>=0;j--)
{
if(a[i]!= a[j]){
console.log("not a palindrome")
return;
}
i=i+1
}
console.log("palindrome")
}
a="madahuhum";
remove();
