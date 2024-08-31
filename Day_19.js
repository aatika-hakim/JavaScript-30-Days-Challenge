//* Regular Expressions



// Activity 1: Basic Regular Expressions

// Task 1: Match the word "JavaScript"
const text1 = "I love JavaScript because JavaScript is versatile.";
const regex1 = /JavaScript/g;
const matches1 = text1.match(regex1);
console.log("Matches for 'JavaScript':", matches1);

// Task 2: Match all digits
const text2 = "The year 2024 has 12 months and 365 days.";
const regex2 = /\d+/g;
const matches2 = text2.match(regex2);
console.log("Matches for digits:", matches2);


// Activity 2: Character Classes and Quantifiers

// Task 3: Match words that start with a capital letter
const text3 = "Hello world! JavaScript is a great language.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = text3.match(regex3);
console.log("Words starting with a capital letter:", matches3);

// Task 4: Match sequences of one or more digits
const text4 = "The price is 50 dollars and 75 cents.";
const regex4 = /\d+/g;
const matches4 = text4.match(regex4);
console.log("Sequences of digits:", matches4);


// Activity 3: Grouping and Capturing

// Task 5: Capture phone number components
const text5 = "My number is (123) 456-7890.";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = text5.match(regex5);
if (matches5) {
    const [fullMatch, areaCode, centralOfficeCode, lineNumber] = matches5;
    console.log("Full match:", fullMatch);
    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
} else {
    console.log("No match found.");
}

// Task 6: Capture username and domain from an email
const text6 = "Contact me at john.doe@example.com.";
const regex6 = /(\w+[\.\w]*)@(\w+\.\w+)/;
const matches6 = text6.match(regex6);
if (matches6) {
    const [fullMatch, username, domain] = matches6;
    console.log("Full match:", fullMatch);
    console.log("Username:", username);
    console.log("Domain:", domain);
} else {
    console.log("No match found.");
}


// Activity 4: Assertions and Boundaries

// Task 7: Match a word only if it is at the beginning of a string
const text7 = "Hello world! This is a test.";
const regex7 = /^\b\w+/;
const matches7 = text7.match(regex7);
console.log("Word at the beginning of the string:", matches7);

// Task 8: Match a word only if it is at the end of a string
const text8 = "This is a test. Ending.";
const regex8 = /\b\w+$/;
const matches8 = text8.match(regex8);
console.log("Word at the end of the string:", matches8);


// Activity 5: Practical Applications

// Task 9: Validate a password
const password = "P@ssw0rd!";
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const isValidPassword = regex9.test(password);
console.log("Password is valid:", isValidPassword);

// Task 10: Validate a URL
const url = "https://www.example.com";
const regex10 = /^(https?:\/\/)?([\w\-\.]+)+\.[a-zA-Z]{2,6}(:\d+)?(\/[\w\-\.]*)*$/;
const isValidUrl = regex10.test(url);
console.log("URL is valid:", isValidUrl);



// 1. Basic Regex Script
const basicRegexScript = (text) => {
    const regexPatterns = {
        "JavaScript": /JavaScript/g,
        "digits": /\d+/g
    };
    
    Object.entries(regexPatterns).forEach(([label, regex]) => {
        const matches = text.match(regex);
        console.log(`Matches for '${label}':`, matches);
    });
};

basicRegexScript("I love JavaScript. The year is 2024 and there are 12 months.");
// 2. Grouping and Capturing Script
const groupingAndCapturingScript = (text) => {
    const regexPatterns = {
        "Phone number": /\((\d{3})\)\s(\d{3})-(\d{4})/,
        "Email": /(\w+[\.\w]*)@(\w+\.\w+)/
    };
    
    Object.entries(regexPatterns).forEach(([label, regex]) => {
        const matches = text.match(regex);
        if (matches) {
            console.log(`Captures for '${label}':`, matches.slice(1));
        } else {
            console.log(`No match found for '${label}'.`);
        }
    });
};

groupingAndCapturingScript("Contact: (123) 456-7890 or email at john.doe@example.com.");


// 3. Character Classes and Quantifiers Script
const charClassesQuantifiersScript = (text) => {
    const regexPatterns = {
        "Capital letter words": /\b[A-Z][a-z]*\b/g,
        "Digit sequences": /\d+/g
    };
    
    Object.entries(regexPatterns).forEach(([label, regex]) => {
        const matches = text.match(regex);
        console.log(`Matches for '${label}':`, matches);
    });
};

charClassesQuantifiersScript("Hello World! The year 2024 has 12 months and 365 days.");


// 4. Assertions and Boundaries Script
const assertionsBoundariesScript = (text) => {
    const regexPatterns = {
        "Word at start": /^\b\w+/,
        "Word at end": /\b\w+$/ 
    };
    
    Object.entries(regexPatterns).forEach(([label, regex]) => {
        const matches = text.match(regex);
        console.log(`Matches for '${label}':`, matches);
    });
};

assertionsBoundariesScript("Start of text. Ending.");

// 5. Validation Script
const validationScript = (text) => {
    const validationPatterns = {
        "Password": /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "URL": /^(https?:\/\/)?([\w\-\.]+)+\.[a-zA-Z]{2,6}(:\d+)?(\/[\w\-\.]*)*$/
    };
    
    Object.entries(validationPatterns).forEach(([label, regex]) => {
        const isValid = regex.test(text);
        console.log(`${label} is valid:`, isValid);
    });
};

validationScript("P@ssw0rd! https://www.example.com");