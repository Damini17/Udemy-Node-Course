const add = (a, b, callback) => {
    setTimeout(() => {
        const sum = a + b;

        callback(sum);
    }, 2000)
}

add(2, 4, (sum) => {
    console.log("Printing sum after 2 seconds ", sum)
})