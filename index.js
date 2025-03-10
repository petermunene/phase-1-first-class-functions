const receivesAFunction = (callback) => {
    callback()
}

const returnsANamedFunction= () => {
    return function named(){}
}

const returnsAnAnonymousFunction=()=>{
    return function(){}
}