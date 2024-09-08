let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
console.log(companies);

// Delete first company from the array!
console.log(companies.shift());
console.log(companies);

// Remove Uber company and adds Ola.
console.log(companies.splice(1, 1, "Ola"));
console.log(companies);


// Add at the end
console.log(companies.push("Amazon"));
console.log(companies);



