function uniques(){

count = new Array(256).fill(0);
for(i=0;i<a.length;i++){
count[a.charCodeAt(i)] = count[a.charCodeAt(i)]+1;
}

for(i=0;i<a.length;i++){
if(count[a.charCodeAt(i)]==1){
console.log(a[i]);
break;
}
}
}
a="gghnvvvc";
uniques();
