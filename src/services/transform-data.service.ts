import { Transform } from "stream";
import TimeISOtoEpoch from "./format-time.service"

export default class TransformDataService extends Transform {

    private timeISOtoEpoch;
    constructor() {
        super({objectMode: true});
        this.timeISOtoEpoch = new TimeISOtoEpoch()
    }

    _transform(chunk: any, _encoding: BufferEncoding, done: Function) {

        const lineArr = chunk.toString().split(' - ');
        const lineArrEpochDate = this.timeISOtoEpoch.convertTimestamp(lineArr);
        
        this.push(this.convertToJson(lineArrEpochDate));
        
        done();
    }

    convertToJson(lineArr: string[]): string {

        try {
            const { transactionId, err } = JSON.parse(lineArr[2]);
            return JSON.stringify([{
                timestamp: Number(lineArr[0]),
                loglevel: lineArr[1],
                transactionId,
                err
            }]) + "\r\n";
            
        } catch (error) {
            throw new Error(`Error occuered in ConvertJSON ${error}`)
        }
    }
}