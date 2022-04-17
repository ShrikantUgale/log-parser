export default class ErrorLogs {

    isErrorLog(line: string): boolean {

        const lineArr: string[] = line.split(' - ');
        return lineArr[1] === 'error'? true : false
    }

}