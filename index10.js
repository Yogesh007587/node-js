const fs=require('fs');
const path =require('path');
const dirPath=path.join(__dirname,'files');
// for(i=0;i<5;i++){
//     fs.writeFileSync(dirPath+`/hello${i}.txt`,"a simple text file");
// }
fs.readdir(dirPath,(error,files)=>{
    files.forEach((item)=>{
        console.log("file name is",item)
    })
})
