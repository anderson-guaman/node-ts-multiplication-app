import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFileUseCase, SaveFile } from '../domain/use-cases/save-file.use-case';


interface RunOptions{
    base:number;
    limit: number;
    showTable: boolean;
    name: string;
    destination: string
}

export class ServerApp{

    static run({base, limit, showTable,name,destination}:RunOptions){
        console.log('Server running.....');

        const table = new CreateTable().execute({base, limit});
        if (showTable) console.log(table);


        const wasCreated = new SaveFile()
        .execute({
            fileContent: table,
            destination: destination,
            fileName: name
        });

        
    }

}