function uniques(){
st1="abc";
st2="bac";
c=st1.split("");
d=st2.split("");
f=d.sort();
e=c.sort();
j=e.join("");
k=f.join("")
console.log(j+k);
if(j == k){
console.log("it is an anagram")
}
else
console.log("it is not an anagram")
}
uniques();
