const price = 123;

price = 456; // intellisense doesn't pick this up, but it does throw an error...

const something; // this doesn't get picked up either, but `const` values need to be initialized