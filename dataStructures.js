// level {3}

// ### level 3:
// 1. Write a recursive function that transforms all the strings to uppercase.
// ```
// // Input object
// ​
// const user = {
//     name: "Elie",
//     job: "Instructor",
//     workDetails: {
//         type: "Part Time",
//         hours: "40 hours"
//     }
//     educationQualifications: [
//         {
//             name: "Full Stack",
//             type: "Certification"
//         },
//         {
//             name: "Javascript",
//             type: "Certification"
//         }
//     ]
// }
// // Output should be
// ​
// {
//     name: "ELIE",
//     job: "INSTRUCTOR",
//     workDetails: {
//         type: "PASRT TimeTIME",
//         hours: "40 HOURS"
//     }
//     educationQualifications: [
//         {
//             name: "FULL STACK",
//             type: "CERTIFICATION"
//         },
//         {
//             name: "JAVASCRIPT",
//             type: "CERTIFICATION"
//         }
//     ]
// }
// ```
// 2. Write a function that takes a string with key value pairs sum the value of all unique properties and return an object from it.
// ```
// Input string: "a:2,b:3,c:4,a:5,b:6"
// ```
// ```
// Output should be object: {a: 7, b: 9, c: 4}
// ```
// 3. Check for balanced parentheses using a stack
// ```
// Example:
// exp = "{[({})]}" should be valid
// but "{[(]} should be invalid
// ```

function upperCaseNestedStrings(user) {
    Object.keys(user).forEach((element) => {
        if (typeof user[element] == "object") {
            user[element] = upperCaseNestedStrings(user[element])
        } else {
            user[element] = user[element].toUpperCase()
        }
    })
    return user;
}

const user = {
    name: "Elie",
    job: "Instructor",
    workDetails: {
        type: "Part Time",
        hours: "40 hours"
    },
    educationQualifications: [
        {
            name: "Full Stack",
            type: "Certification"
        },
        {
            name: "Javascript",
            type: "Certification"
        }
    ]
}
console.log(upperCaseNestedStrings(user));

function addKeyValueString(keyValuePair) {
    let newkeyValuePair = keyValuePair.split(',');
    let addObject = {}
    newkeyValuePair.forEach(e => {
        let [k, v] = e.split(":");
        if (addObject[k]) {
            addObject[k] += parseInt(v)
        } else {
            addObject[k] = parseInt(v)
        }
    })
    return Object.entries(addObject).map((e) => {
        return e.join(':')
    }).join(',')
}

const keyValuePair = "a:2,b:3,c:4,a:5,b:6"
console.log(addKeyValueString(keyValuePair));


function validBrackets(brackets) {
    let bracketArray = brackets.split('')
    let stck = []
    let oppositeBrckts = {
        '(': ')',
        '[': ']',
        '{': '}'
    }

    bracketArray.forEach((e) => {
        if (oppositeBrckts[e]) {
            stck.push(e)
        } else {
            if (oppositeBrckts[stck.pop()] != e) return false;
        }
    })

    return !stck.length
}

let brackets = "{[(]}"

console.log(validBrackets(brackets));