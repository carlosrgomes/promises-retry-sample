var promiseRetry = require('promise-retry');

 

function doSomething(){
   
    return new Promise(function (fulfill, reject){
       
        console.log("doSomething")
        reject(new Error('Lançando erro'));
    });
  

    
}

promiseRetry(function (retry, number) {
    console.log('attempt number', number);
 
    return doSomething()
    .catch(retry);
    
})
.then(function (value) {
    console.log("executando");
}, function (err) {
    console.log("erro"+err);
});
