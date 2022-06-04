const sum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b);
        }, 2000)
    })
}

const doWork = async () => {
    //throw new Error('Something went wrong')
    //return '';

    const addResult = await sum(1, 4)
    return addResult;
}

//async function always return promise
//promise with async undefined

//console.log(doWork())

doWork().then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})