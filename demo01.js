async function test(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('test async')
        }, time)
    })
}

function getSomething() {
    return 'something'
}
//async await简单案例
async function fn() {
    const res1 = await test(2000);
    const res2 = await getSomething();
    console.log(res1, res2)
}
fn()