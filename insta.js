const Instagram = require('instagram-web-api')
const FileCookieStore = require('tough-cookie-filestore2')
const username = ""
const password = ""
const cookieStore = new FileCookieStore('./cookies.json')
const client = new Instagram({ username, password, cookieStore })

//const getprivateprofile = async () => {
//    try{
//        await client.login()
//        const profile = await client.getProfile()
//
//        console.log(profile)
//    }
//    catch(e){
//        console.log(e)
//    }
//    
//}

//client
//  .login()
//  .then(() => {
//    client
//      .getProfile()
//      .then(console.log)
//  })

//client.getFollowers({ userId: '54171279115' })
//.then((res) => {
////console.log(result);
//console.log(res);
//})
//console.log(result)

client.getMediaComments({ shortcode: 'Cg1dBdrtbR3', first: '49', after: '' }).catch((error) => {
    console.log(error);
  })
  .then((response) => {
    console.log(response);
  });
  
//  //The query cursor 'after' maybe return an array, if array you need to convert like this: 
//  let pointer = response.page_info.end_cursor;
//  // this will try to convert array to json stringify
//    try{
//            pointer = JSON.parse(pointer);
//            pointer = JSON.stringify(pointer);
//    }catch(e){
//            console.log("Pointer is not array!, don't need to be converted!")
//    }
  
//client.getPhotosByHashtag({ hashtag: 'unicorn' })

//client.getPrivateProfilesFollowRequests(cursor)


//await client.getMediaLikes({ shortcode: 'Cg1dBdrtbR3', first: '49', after: '' })


