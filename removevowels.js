function uniques(){
res="";
for(i=0;i<a.length;i++){
if(a[i]!="a"&& a[i]!="e"&& a[i]!="i" &&a[i]!="o"&&a[i]!="u"){
 res=res+a[i];
 console.log(res)
}

}
return res;
}
a="aaabeeccc";
result=uniques();
console.log(result);