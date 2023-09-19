function tagFunction(array, ...args){
    console.info(array)
    console.info(args)
}

test('tag function', ()=>{
    const name = 'Eko';
    tagFunction`Hello ${name}!, How are you?`
    tagFunction`Hello ${name}!, See You Later?`
})

test ('tag function sql', ()=>{
    const name = 'Eko';
    const age = 30;

    tagFunction`SELECT * FROM users Where name = ${name} AND age = ${age}`
})