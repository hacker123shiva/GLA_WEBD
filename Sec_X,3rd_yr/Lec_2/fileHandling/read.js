const fs=require('fs')
const path=require('path')

let movieDir=path.join(__dirname,'movie.json')

fs.readFile(
    movieDir,
    {
      encoding:"utf-8"  
    },
    ((err,data)=>{
        if(err) console.log(err);
        console.log(data);
    })
)
