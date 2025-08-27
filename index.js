require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubData = {
    "login": "VikasVishwakarma-01",
    "id": 175034451,
    "node_id": "U_kgDOCm7QUw",
    "avatar_url": "https://avatars.githubusercontent.com/u/175034451?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/VikasVishwakarma-01",
    "html_url": "https://github.com/VikasVishwakarma-01",
    "followers_url": "https://api.github.com/users/VikasVishwakarma-01/followers",
    "following_url": "https://api.github.com/users/VikasVishwakarma-01/following{/other_user}",
    "gists_url": "https://api.github.com/users/VikasVishwakarma-01/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/VikasVishwakarma-01/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/VikasVishwakarma-01/subscriptions",
    "organizations_url": "https://api.github.com/users/VikasVishwakarma-01/orgs",
    "repos_url": "https://api.github.com/users/VikasVishwakarma-01/repos",
    "events_url": "https://api.github.com/users/VikasVishwakarma-01/events{/privacy}",
    "received_events_url": "https://api.github.com/users/VikasVishwakarma-01/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Vikas Vishwakarma",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "👋 Hi, I’m Vikas — a B.Tech student with a passion for coding and building scalable software.\r\n  ",
    "twitter_username": null,
    "public_repos": 4,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-07-08T15:14:36Z",
    "updated_at": "2025-08-26T15:25:48Z"
}



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('welcome vikas!')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login</h1>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>VIKAS vishwakarma</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


