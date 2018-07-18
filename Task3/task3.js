const users = {
    firstUser: {
        name: 'Roman',
        lastName: 'Lurov',
        otherData: {
            role: 'student'
        }
    },
    secondUser: {
        name: 'Ivan',
        lastName: 'Bondarenko',
        otherData: {
            role: 'student'
        }
    },
    thirdUser: {
        name: 'Roman',
        lastName: 'Lurov',
        otherData: {
            role: 'student'
        }
    },

    fourthUser: {
        name: 'Oleg',
        lastName: 'Murko',
        otherData: {
            role: 'student'
        }
    },
    fifthUser: {
        name: 'Kurz',
        lastName: 'Smith',
        otherData: {
            role: 'student'
        }
    },
};
for (let key in users) {
    const user = users[key];
    console.log(user);
    if (user) {
        console.log('name: ', user.name);
        console.log('last name: ', user.lastName);
        console.log('role: ', user.otherData.role)
    }
};
