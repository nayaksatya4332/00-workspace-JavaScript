let p1 = Promise.resolve({id:1,name:'Satya'});
let p2 = Promise.reject(new Error('Error Occurred..'));

p1.then(res=>console.log(res));
p2.catch(err=>console.log(err.message));