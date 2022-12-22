### Title of Website:

Phansea

### Describe what your website does

It's website where users can look at different types of fish and corals.

### List the features you implemented and explain why you chose those features to implement

So far, users are only able to look up different fish and corals that are suitable for aquariums. I plan to impliment a features where users can create their own fishtank by selecting fish and corals they want from the list and share it with other members.

## Available Scripts

In the project directory, you can run:

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
Or open https://phanseafe.herokuapp.com/ to view on Heroku

### `npm test`

Launches the test runner in the interactive watch mode.

### Walk someone through the standard user flow for the website

Users can register for an account to gain full access to the website.
Registered users can view all fish and corals on the database and also create a new fish or coral.

### Keep the API in there, and if you have anything to say about the API then
add some notes. If you have created your own API, please document the
process.

Routes:

### Local: http://localhost:3001/saltwaterfish
### Heroku: https://phanseadb.herokuapp.com/saltwaterfish

get a list of all saltwaterfish

### Local: http://localhost:3001/saltwaterfish/?type={type}
### Heroku: https://phanseadb.herokuapp.com/saltwaterfish/?type={type}

To get a list of specific type of fish. Please see the available types below

type:
tangs
Damselfish
Angelfish_large
Angelfish_dwarf"
Anthias
Blennies"
Clownfish


### Local: http://localhost:3001/saltwaterfish/{handle}
### Heroku: https://phanseadb.herokuapp.com/saltwaterfish/{handle}

to get a more details on a specific handle

### http://localhost:3001/corals

get a list of all corals

### http://localhost:3001/coral/?type={type}

To get a list of specific type of coral. Please see the available types below

type:
LPS
SPS
Zoanthids
Mushrooms
Anemones
Soft

### http://localhost:3001/coral/{handle}

to get a more details on a specific handle


### http://localhost:3001/freshwaterfish

get a list of all corals

### http://localhost:3001/freshwaterfish/?type={type}

To get a list of specific type of coral. Please see the available types below

type:
Lake-Malawi"
South-American-cichlids"
Loaches"
Live-bearers
Tetras
Central-American-cichlids

### http://localhost:3001/freshwaterfish/{handle}

to get a more details on a specific handle


### Identify the technology stack used to create your website

Backend: Node JS - Express
Frontend: React









#