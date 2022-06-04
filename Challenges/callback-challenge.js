const doWorkCallback = (callback) => {
    setTimeout(() => {
        callback('this is my error!', undefined);
    }, 2000)
}

//this method accepts a call-back as a input parameter
doWorkCallback((error, result) => {
    if (error)
    return console.log(error)

    console.log(result);
})