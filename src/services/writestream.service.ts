import { WriteStream } from "fs";
import { fileStream } from '../types/filestream';

export default class WriteFileStream {

    private filePath: string;
    private fs;

    constructor({filePath, fs}: fileStream){
        this.filePath = filePath;
        this.fs = fs;
    }
    
    openWriteStream(): WriteStream {
        try {
            return this.fs.createWriteStream(this.filePath);    
        } catch (error) {
            throw new Error(`Error in WriteFileStream ${error}`); 
        }
    }

}