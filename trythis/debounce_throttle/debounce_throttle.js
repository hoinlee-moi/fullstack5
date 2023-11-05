const rand = (start, end) =>
  console.log(start + Math.floor(Math.random() * (end - start + 1)),"dddddd",start,end);

let count = 0;
const init = setInterval(() => {
  if ((count += 1) > 20) return clearInterval(init);
  rand(1, 10)
}, 100);

const debounce= (cb,delay) => {
    let timer;
    return (...args) => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(cb,delay,...args)
    }
}

const debounceRand = debounce(rand,1000)

const debounceInit = setInterval(()=>{
    if ((count += 1) > 20) return clearInterval(debounceInit);
    debounceRand(1,10)
},100)

const throttle = (cb,delay) => {
    let timer;
    return (...args) => {
        if(timer) return;
        timer = setTimeout(()=>{
            cb(...args)
            timer=null
        },delay)
    }
}

const throttleRand = throttle(rand,1000)


const throttleInit = setInterval(()=>{
    if ((count += 1) > 20) return clearInterval(throttleInit);
    throttleRand(1,10)
},100)