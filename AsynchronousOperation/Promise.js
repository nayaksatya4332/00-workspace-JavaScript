const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Calling API');
        // resolve({id:10,name:'Satya'});
        reject(new Error('Message'));
    },2000);
});
promise.then((result)=>{
    console.log(result);
});
promise.catch((error)=>{
    console.log(error.message);
});