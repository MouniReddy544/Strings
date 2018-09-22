function reverse(){
temp="";
store=""
for(i=a.length-1;i>=0;i--){
if(a[i]==" "){
c=""
for(j=temp.length-1;j>=0;j--){
c=c+temp[j];
}
store=store+c+" ";
temp="";
c="";
}
else
temp=temp+a[i];
}

for(k=temp.length-1;k>=0;k--){
store=store+temp[k];
}
console.log(store);
}
a="Mounika is lazy";
reverse();
