const fs=require('fs');

module.exports=function(name){
 var demopath="./project";
 var targetpath="./"+name;
 var arr=[];
 fs.mkdir(targetpath,function(){
   pusharr(demopath);
   arr.forEach(function(item,index){
     console.log(item); 
     (function(item){
      if(item[0]=='file'){
        fs.readFile(item[1],function(err,data){
          fs.writeFile(targetpath+"/"+item[1].replace('./project',"."),data,function(){});
        })
      }else{
        fs.mkdir(targetpath+"/"+item[1].replace('./project',"."),function(){})
      }
     })(item)
   })
   function pusharr(path){
     // ASYNC
     //等待者模式
     //直接改成同步
      var files=fs.readdirSync(path);
      files.forEach(function(item,index){
        var nowpath=path+"/"+item;
        var stat=fs.statSync(nowpath);
        if(stat.isDirectory()){
          arr.push(['dir',nowpath]);
          pusharr(nowpath);
        }else{
          arr.push(['file',nowpath]);
        }
      })

   }
 })
}