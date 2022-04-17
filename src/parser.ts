import fs from 'fs';
import { pipeline } from 'stream';
import * as yargs from 'yargs';

import ReadFileStream from './services/readstream.service';
import WriteFileStream from './services/writestream.service';
import TransformService from './services/transform.service';
import TransformDataService from './services/transform-data.service';
import ErrorLogs from './services/find-error.service';

const parser = yargs.options({
  input: { type: 'string', demandOption: true},
  output: {type: "string", demandOption: true}
});

// console.log(argv.input);

(async() => {
  const {input, output} = await parser.argv;

  const readFileStream = new ReadFileStream({filePath: input, fs}).openReadStream();
  const writeFileStream = new WriteFileStream({filePath: output, fs}).openWriteStream();
  
  const errorLogs = new ErrorLogs();
  const transformService = new TransformService(errorLogs);
  const transformDataService = new TransformDataService();
  
  
  
  pipeline(readFileStream, transformService, transformDataService, writeFileStream, err => {
      if (err) {
        console.log('Pipeline encountered an error:', err);
      } else {
        console.log(`${output} file created.`);
      }
    });
  
})();




