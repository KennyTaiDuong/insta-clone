const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const name1 = document.getElementById("name-1")
const name3 = document.getElementById("name-2")
const name2 = document.getElementById("name-3")

const username1 = document.getElementById("username-1")
const username2 = document.getElementById("username-2")
const username3 = document.getElementById("username-3")

const location1 = document.getElementById("location-1")
const location2 = document.getElementById("location-2")
const location3 = document.getElementById("location-3")

const avatar1 = document.getElementById("avatar-1")
const avatar2 = document.getElementById("avatar-2")
const avatar3 = document.getElementById("avatar-3")

const post1 = document.getElementById("post-img1")
const post2 = document.getElementById("post-img2")
const post3 = document.getElementById("post-img3")

const cap1 = document.getElementById("caption-1")
const cap2 = document.getElementById("caption-2")
const cap3 = document.getElementById("caption-3")

const likes1 = document.getElementById("likes-1")
const likes2 = document.getElementById("likes-2")
const likes3 = document.getElementById("likes-3")

name1.innerHTML = posts[0].name
username1.innerHTML = posts[0].username
location1.innerHTML = posts[0].location
avatar1.src = posts[0].avatar
post1.src = posts[0].post
cap1.innerHTML = posts[0].comment
likes1.innerHTML = posts[0].likes + " likes"

name2.innerHTML = posts[1].name
username2.innerHTML = posts[1].username
location2.innerHTML = posts[1].location
avatar2.src = posts[1].avatar
post2.src = posts[1].post
cap2.innerHTML = posts[1].comment
likes2.innerHTML = posts[1].likes + " likes"

name3.innerHTML = posts[2].name
username3.innerHTML = posts[2].username
location3.innerHTML = posts[2].location
avatar3.src = posts[2].avatar
post3.src = posts[2].post
cap3.innerHTML = posts[2].comment
likes3.innerHTML = posts[2].likes + " likes"