export default class TimeISOtoEpoch {

    convertTimestamp(lineArr: string[]): string[]{
        try {
            const dateToEpoch = Date.parse(lineArr[0])
            lineArr[0] = dateToEpoch.toString();
            return lineArr;
        } catch (error) {
            throw new Error(`Error in TimeISOtoEpoch ${error}`);
            
        }
    }
}