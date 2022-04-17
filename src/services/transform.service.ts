import { Transform } from "stream";

import ErrorLogs from './find-error.service';

export default class TransformService extends Transform {


    constructor(private errorLogs: ErrorLogs) {
        super({ objectMode: true});

    }

    _transform(chunk: any, _encoding: BufferEncoding, done: Function) {

        const data = chunk.toString();
        const lines = data.split('\n');

        for(const line of lines) {

            if(this.errorLogs.isErrorLog(line)) {
                this.push(line);
            }
        }
     done()
    }
}