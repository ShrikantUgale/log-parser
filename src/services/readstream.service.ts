import { ReadStream } from "fs";
import { fileStream } from '../types/filestream';

export default class ReadFileStream {

    private filePath: string;
    private fs;

constructor({filePath, fs}: fileStream){
        this.filePath = filePath;
        this.fs = fs;
    }
    
    openReadStream(): ReadStream {
        try {
            return this.fs.createReadStream(this.filePath, 'utf-8');    
        } catch (error) {
            throw new Error(`Error in ReadFileStream ${error}`); 
        }
    }

}