const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //resolve([1, 4, 7]);
        reject('This is my error!');
    }, 2000)
})

//then only runs when things went well
doWorkPromise.then((result) => {
    console.log('Success!', result);
}).catch((error) => {
    console.log(error);
})

//we as node developers won't be creating promises
//it would be created by the node libraries we use 