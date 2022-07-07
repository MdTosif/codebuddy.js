// level {3}

// old function
async function getUsers_(users) {
    const new_users = [];

    for (let i = 0; i < users.length; i = i + 1) {
        const newUser = users[i];
        newUser.id = i;

        new_users.push(newUser);
    }

    return new_users;
}

// new refatored function
async function getUsers(users) {
    return users.map((user, i)=>{
        user.id = i
        return user
    })
}

