function remove(){
c=a.split("");
d=b.split("");

e=c.sort();
f=d.sort();
i=0
j=0
while(i<e.length && j<f.length)
{
if(e[i]!=f[j])
{
console.log("not an Anagram")
return
}

i=i+1
j=j+1
}

if(i<e.length || j<f.length)
{
console.log("not a anagram")
return
}

console.log("anagram")
}

a="mad";
b="dam";
remove();





