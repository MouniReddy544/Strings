function deep(){

i=x.length-1
j=y.length-1
store=""
sum=0
while(i>=0 && j>=0)
{
sum=sum+(x.charCodeAt(i)-48)+(y.charCodeAt(j)-48)
if(sum > 9)
{
rem=sum%10
sum=1
}
else
{
rem=sum
sum=0
}
store=store+rem
i=i-1
j=j-1
}
if(sum==1)
store=store+sum

store=store.split("");
store=store.reverse()
store=store.join("")
console.log(store)



}
x="999";
y="999";
deep();