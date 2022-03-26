import { readFile, readFileSync } from 'fs';


export async function readFileString(path: string, options: { encoding?: null; flag?: string; } | string = 'utf8'): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        const callback = (err: any, data: Buffer) => {
            if (err) reject(err);
            const fileAsString = data.toString();
            resolve(fileAsString);
        };
        readFile(path, options, callback);
    });
}


export function readFileStringSync(path: string, options?: { encoding?: null; flag?: string; }) {
    return readFileSync(path, options).toString();
}
