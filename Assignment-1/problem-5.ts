{
    {
    function getProperty(obj: { [key: string]: any }, key: string): any {

    if (key in obj) {

        return obj[key];

    } else {

        throw new Error("Property does not exist on the object.");
    }
}

const person = { name: "Alice", age: 30 };

console.log(getProperty(person, "name")); 
}

}