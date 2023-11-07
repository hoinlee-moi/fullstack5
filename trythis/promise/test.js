let r = true;
setTimeout(() => {
  console.log("end");
  r = false;
}, 100);
setTimeout(()=>{
    console.log(r)
},1000)
// while (r) {
//   console.log(r);
// }

function* ff(){
    for(let i=0; i<5; i+=1){
        yield console.log('안녕',ff.next())
    }
} 
ff()