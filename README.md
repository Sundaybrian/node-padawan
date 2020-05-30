# Massive club cast Concept Backend/Web/Mobile/Scrapper

### Under Development

## By **[Brian Sunday](https://github.com/Sundaybrian/node-padawan)**

## Description

- This is a three part platform assault; ionic angular, ionic react , nodejs-mongodb, the web frontend and backend is hosted here **[massivefc](https://agile-citadel-18179.herokuapp.com/)**

- part 1 is the ionic mobile app **[away-fans](https://github.com/Sundaybrian/away-fans)**
- part 2 is the backend/frontend **nodejs,mongodb and react [node-padawan](https://github.com/Sundaybrian/node-padawan)**
- part 3 is the web scraper that provides the data for the systems made with nodejs, cheeriojs and mongodb **[massive-scraper](https://github.com/Sundaybrian/massivefc-scraper)**

- This repo has the nodejs api for crud operations as well as filtering and pagination

## Setup/Installation Requirements

- Clone the repo `cd node-padawan`
- Open `package json` and view the different scripts to install the dependencies
- You can run the front end separately from the backend or together depending with your use case.All scripts are in the package.json

## APis

- [BaseUrl](https://agile-citadel-18179.herokuapp.com/api/) for the hosted version application
- The local build will be `https://localhost:5000/api` then prefix whatever endpoint either articles etc
- endpoints include auth, users, articles, clubArticles.**all api reference will be provided soon, but you can take a sneak peek in the routes folder for node-padawan [node-padawan](https://github.com/Sundaybrian/node-padawan)**

## API Documentation

### Request parameters

- `sort_by` - The order to sort the videos or club articls in. Possible options: asc, desc. Default: scrappedData in asc order.
- `limit` (int)- The number of results to return per page. Default: 5 for club articles and 4 for videos
- `page` (int) - Use to page through the results. Default: 1

### Response object

- `limit`(int) - The limit used
- `currentPage`(int) - The current page number
- `totalPages`(int) - The total number of pages available
- `previousPage`(int) - The previous page in the resultset
- `nextPage`(int) - The next page in the resultset
- `results` (array)- The events sorted by scrappedDate. Contains JSON objects with an \_id and data key.

##### data

- Data will vary depending on the endpoint hit..This is an example of a response

```json
{
  "results": [
    {
      "_id": "5ed018d934832c70a0c67e0d",
      "club": "5ecc13dd685c419805bfbff8",
      "title": "Gor Mahia juniors sink Tandaza FC",
      "url": "http://gormahiafc.co.ke/gor-mahia-juniors-sink-tandaza-fc/",
      "excerpt": "Gor Mahia Youth team beat Tandaza FC 1-0 in FKF division 2 Eastern Zone (zone C) match played at the…",
      "imageUrl": "http://gormahiafc.co.ke/wp-content/uploads/2019/02/Youth-Team.png",
      "createdAt": "February 16, 2019",
      "scrappedDate": "2020-05-28T20:02:33.549Z",
      "category": "category-youth-team",
      "__v": 0
    },
    {
      "_id": "5ed018d934832c70a0c67e0e",
      "club": "5ecc13dd685c419805bfbff8",
      "title": "Gor Mahia juniors start on a high",
      "url": "http://gormahiafc.co.ke/gor-mahia-juniors-start-on-a-high/",
      "excerpt": "Gor Mahia junior team started off their new season with a good 2-1 win over Bomas of Kenya yesterday at…",
      "imageUrl": "http://gormahiafc.co.ke/wp-content/uploads/2018/06/gor_youth.png",
      "createdAt": "January 13, 2019",
      "scrappedDate": "2020-05-28T20:02:33.550Z",
      "category": "category-youth-team",
      "__v": 0
    },
    {
      "_id": "5ed018d934832c70a0c67e14",
      "club": "5ecc13dd685c419805bfbff8",
      "title": "Gor Youth team hammer helpless Vapors",
      "url": "http://gormahiafc.co.ke/gor-mahia-youth-team-hammer-helpless-vapors/",
      "excerpt": "Gor Mahia Youth walloped Ngong Vapors 7-2 in Football Kenya Federation Division 2 Zone B match played today at City…",
      "imageUrl": "http://gormahiafc.co.ke/wp-content/uploads/2018/05/youth_team.png",
      "createdAt": "May 26, 2018",
      "scrappedDate": "2020-05-28T20:02:33.558Z",
      "category": "category-youth-team",
      "__v": 0
    },
    {
      "_id": "5ed018d934832c70a0c67e12",
      "club": "5ecc13dd685c419805bfbff8",
      "title": "Gor Mahia Youth beat Ruiru Hot Stars",
      "url": "http://gormahiafc.co.ke/gor-mahia-youth-beat-ruiru-hot-stars/",
      "excerpt": "Gor Mahia Youth beat Ruiru Hot Stars 4-0 in an FKF Division 2 Zone B league match played today at…",
      "imageUrl": "http://gormahiafc.co.ke/wp-content/uploads/2018/05/youth_team.png",
      "createdAt": "June 13, 2018",
      "scrappedDate": "2020-05-28T20:02:33.555Z",
      "category": "category-youth-team",
      "__v": 0
    }
  ],
  "nextPage": 2,
  "totalPages": 37,
  "currentPage": 1,
  "limit": 10
}
```

**Pagination and Sorting**

Create GET requests

1. Get all club articles [default limit is 5]
   `http://localhost:5000/api/clubArticles`

2. Page through the results
   `http://localhost:5000/api/clubArticles?page=2`

3. Get all club articles in descending order
   `http://localhost:5000/api/clubArticles?sort_by=scrappedDate`

4. Get all club articles with a limit of 10
   `http://localhost:5000/api/clubArticles?limit=10`

**Create, Read and Update articles endpoint**

1. Create an article [POST]<br/>
   `http://localhost:5000/api/articles`

2. Read a single article [GET]<br/>
   `http://localhost:5000/api/article/id`

3. Update the article [PUT]<br/>
   `http://localhost:5000/api/article/id`
   <br/>

4) Update the article [DELETE]<br/>
   `http://localhost:5000/api/article/id`
   <br/>

5. Get all articles [PUT]<br/>
   `http://localhost:3000/api/article/id`
   <br/>

## Technologies Used

- Nodejs
- express
- mongoose
- mongodb
- ionic-react
- ionic-angular
- heroku
- cheeriojs

## Learn More

### License
