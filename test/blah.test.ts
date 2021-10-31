import { sayHello } from '../src';

test("Just for testing that says hello", () => {
  expect(sayHello()).toEqual("Hello World")
})
