function counts(){
max=-100000000

count = new Array(256).fill(0);
for(i=0;i<a.length;i++){
count[a.charCodeAt(i)] = count[a.charCodeAt(i)]+1;
}

for(i=0;i<a.length;i++){
if(count[a.charCodeAt(i)]>max){
max=count[a.charCodeAt(i)]
ch=a[i]
}
}
console.log(ch);
}
a="bbaaacccc";
counts();
