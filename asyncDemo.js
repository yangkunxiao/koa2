async function test(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('test async')
        },5000)
    })
}
// const result = test();
// console.log(result);

function getSomething(){
    return 'something'
}

async function fn(){
    const res1 = await test();
    const res2 = await getSomething();
    console.log(res1,res2)
}
fn()