import fs from 'fs';

export interface SaveFileUseCase {
    execute: (options: Options)=>boolean;
}

export interface Options{
    fileContent: string;
    destination?: string;
    fileName?: string;
}


export class SaveFile implements SaveFileUseCase{
    constructor(/**
        repository: StorageRepository */
    ){}

    execute({
        fileContent, 
        destination = 'outputs/', 
        fileName = 'table'
    }: Options): boolean{
        try {
            fs.mkdirSync(destination,{recursive:true})// recursive true hace q si esta ya no lo borre o salga un error de dir exist
            // escribe el archivo (path,texto,manejo de errores)
            fs.writeFileSync(`${destination}/${fileName}.txt`,fileContent);
            console.log('File created!');
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    };
}