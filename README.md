# About

This application is developed to search error logs from the provided log file. (--input option from command line)
It generates a ouput file for error logs. (--output option from command line.)
This application is developed and tested on `node v16.14.2`.

## Installation

Clone this repo and run following commands for installation.
```
cd log-parser
npm install
```

## Usage

* Use following commands to run application.
```
npm run build
cd dist
node parser.js --input ./app.log --output ./errors.json

```
* Output file will be generated in dist folder.