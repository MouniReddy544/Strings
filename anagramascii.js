function remove(){

if(a.length!=b,length)
{
console.log("not an anagram")
return
}
count = new Array(256).fill(0);
for(i=0;i<a.length;i++){
count[a.charCodeAt(i)] = count[a.charCodeAt(i)]+1;
}

for(j=0;j<b.length;j++)
{
count[b.charCodeAt(j)] = count[b.charCodeAt(j)]-1;

if(count[b.charCodeAt(j)]<0)
{
console.log("not an anagram")
return
}
}


console.log("its an angram")
}

a="mad";
b="dam";
remove();





