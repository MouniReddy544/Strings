function climb(){

f1=1;
f2=2;
sum=0;
console.log("hi")
for(i=0;i<=n-2;i++){
sum=f1+f2;
f1=f2
f2=sum;
}
console.log(sum)

}
n=5;
climb();