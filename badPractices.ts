
// Issue: Multiple code smells
class BadClass {
    public var1: any;  // Public variable, any type
    private var2;      // Implicit any

    constructor() {
        console.log("Constructor");
    }

    public doSomething() {
        var x = 5;     // 'var' usage
        if (x == "5")  // Type coercion
        {              // Wrong curly brace position
            return;
        }
    }
}

// Issue: Empty catch block
try {
    throw new Error("Test");
} catch(e) {
    // Empty catch block
}
