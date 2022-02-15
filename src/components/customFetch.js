let is_ok = true;


export const customFetch =(timeout, task)=> {
    return new Promise ((resolve, reject) =>{
       setTimeout(()=>{

       }, timeout)
        if (is_ok) {
            resolve(task)
        } else {
            reject("ERROR")
        }
    })
}
