// level {3}


const reactionDummyData = {
    liked: [
        { id: 1, name: "John Doe", age: 20 },
        { id: 2, name: "Jane Doe", age: 30 },
        { id: 3, name: "John Smith", age: 40 }
    ],
    disliked: [
        { id: 4, name: "Jason Doe", age: 20 },
        { id: 5, name: "Josh Doe", age: 30 },
        { id: 6, name: "Karen Smith", age: 40 }
    ],
    loved: [
        { id: 7, name: "Jasmine Doe", age: 20 },
        { id: 8, name: "Bob Doe", age: 30 },
        { id: 9, name: "Tom Smith", age: 40 }
    ]
}

console.log(formatReactionData(reactionDummyData));

// add reactionName in reactionData array
function addReactionName([reactionName, reactionData]) {
    return reactionData.map((element) => {
        element.reaction = reactionName
        return element
    })
}

// format reaction object {reaction:reactiondata} to reaction array {reactiondata,reaction:reactionName}
async function formatReactionData(reactions) {
    let reactionRaw = Object.entries(reactions).map(addReactionName)
    let finalReactionData = []
    reactionRaw.forEach((e)=>{
        finalReactionData.push(...e)
    })
    return finalReactionData
}
