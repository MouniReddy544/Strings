function counts(){
a="abgggggg";
count = new Array(256).fill(0);

for(i=0;i<a.length;i++)
{
count[a.charCodeAt(i)]=count[a.charCodeAt(i)]+1

}


for(i=0;i<256;i++)
{
if(count[i]>0)


console.log(String.fromCharCode(i)+" "+count[i])
}

}

counts();
