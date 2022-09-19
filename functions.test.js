// const myFunction = require('./functions')
const {returnTwo, greeting, add} = require('./functions')


test('This test checks if the function returns two', () => {
expect(returnTwo()).toBe(2)
})

test('This test checks if the string matches', () => {
    expect(greeting("James")).toBe('Hello, James')
    expect(greeting("Jill")).toBe('Hello, Jill')
    })
test('add sum', () => {
    expect(add(2, 2)).toBe(4)
})