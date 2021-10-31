import { sayHello, sayBye } from '../src';

test("Just for testing that says hello", () => {
  expect(sayHello()).toEqual("Hello World")
})
test("Just for testing that says hello", () => {
  expect(sayBye()).toEqual("Bye")
})
