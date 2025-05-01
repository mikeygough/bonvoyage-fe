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

todos:

- [ ] fix layout shift when styles are applied
- [ ] add reducers for filtering
- [x] add reducers for sorting
- [ ] use budget field or remove from the backend
- [ ] incorporate toast or flash banners when a trip/activity is added
- [ ] more interactivity
- [x] make form mobile responsive
