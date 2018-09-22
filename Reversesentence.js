function reverse(){
temp=" ";
store=""
for(i=a.length-1;i>=0;i--){
if(a[i]==" "){
//console.log(temp)
c=" "
for(j=temp.length-1;j>=0;j--){
c=c+temp[j]
}
console.log(c)
store=store+c
temp=" " 
}
else
{
temp=temp+a[i]
}
}

c=" "
for(j=temp.length-1;j>=0;j--){
c=c+temp[j]
}

store=store+c



console.log(store)

}



a="Mounika is lazy";
reverse();
