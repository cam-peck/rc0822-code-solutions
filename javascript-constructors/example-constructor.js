function ExampleConstructor() {

}

console.log(ExampleConstructor.prototype);
console.log(typeof ExampleConstructor.prototype);

var instance = new ExampleConstructor();
console.log('Value of instance: ', instance);

var instanceCheck = instance instanceof ExampleConstructor;
console.log('Value of instanceCheck: ', instanceCheck);
