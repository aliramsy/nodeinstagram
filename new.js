const Instagram = require('instagram-web-api')

const client = new Instagram({username: "amoradiir", password: ""})
class Test {
    constructor() {
    }

    async getUserByUsername( ) {

// try {
// client
//   .login({ username: "amoradiir", password: "Mas@903"}, { _sharedData: false })
//   .then((res) => {
// console.log(res);
//     client
//       .getProfile()
//       .then(console.log)
//   })

// const followings =  client.getFollowings({ userId: '54171279115' })
// .then((res) => {
//     console.log(followings);
//     console.log(res);
// })

// const result =  client.search({ query: 'unicorn' })
// .then((res) => {
//     console.log(result);
//     console.log(res);
// })
    const result1 = client.getFollowers({ userId: '54171279115' })
    .then((res) => {
    console.log(result1);
    console.log(res);
    })

    //const result =  await client.getUserByUsername({ username: 'instagram' })
    //.then((res) => {console.log(result);
    //console.log(res);
    //})
    //console.log(result);
// } catch (error) {
//   console.log(error)  
// }
}

}

const item = new Test();
const po = item.getUserByUsername();
console.log(po);