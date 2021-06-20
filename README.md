# pasteUrl

paste the contents of a file and get a shortened URL to retrieve the contents
later.

## Run locally

```
npm install
docker-compose up -d
npx nodemon index.js
```

### API

**paste a file**

```
curl --form paste='@filename' localhost:3000
```

**lookup a paste**

```
curl localhost:3000/2c77bf7f9629d00b
```

### Run tests

```
npm test
```

