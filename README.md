# README

hey! this repo is a front-end for the [bonvoyage back-end](https://github.com/mikeygough/bonvoyage-be).

bonvoyage is a trip planning app. Users create upcoming trips with a title, description, image, start & end date. then they associate activities with each trip to stay organized on their adventure!

this front-end is built with React and leverages Redux for state management. all updates are handled asynchronously with Redux Toolkit Query. There are no URL changes or page refreshes.

the back-end is a Ruby on Rails API.

## getting started

- clone this repo along with the [bonvoyage back-end](https://github.com/mikeygough/bonvoyage-be)
- install dependencies: `npm install`
- start the server: `npm run dev`

### notes

you _may_ run into a CORS issue when trying to fetch data with a locally running back-end. for help resolving this checkout `config/initializers/cors.rb` in the bonvoyage back-end. you may need to permit certain origins.

### AI usage

AI was helpful in getting a handle on RTK Query. for example, I ran into an error where my queries weren't working and the solution was that I had incorrectly named my hooks. in apiSlice.js for instance, hooks need to be exported with the name format of 'use' + query name + 'Query'.

additionally, it helped me get unblocked with some backend changes in particular related to my nested route structure where activities belong to a trip.

#### demo

#### dummy data:

Balinese Paradise Retreat

Discover lush rice terraces, ancient temples, vibrant culture, and stunning beaches.

https://images.unsplash.com/photo-1555400038-63f5ba517a47?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D

2026-05-23

2026-05-31

Explore Ubud Monkey Forest

Visit Tegalalang Rice Terraces

Sunrise Hike to Mount Batur

Traditional Balinese Dance Performance

Surf Lesson at Kuta Beach
