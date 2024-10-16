import yargs from 'yargs';
import {hideBin} from 'yargs/helpers'

export const yarg = yargs(hideBin(process.argv))
    .option('b',{
        alias : 'base',
        type: 'number',
        demandOption: true,
        describe: 'This is the base of multiplication table'
    })
    .option('l',{
        alias: 'limit',
        type: 'number',
        default: 10,
        describe: 'this is de limit of de table, it is default 10'
    })
    .option('s',{
        alias: 'show',
        type: 'boolean',
        default: false,
        describe: 'show multiplication table'
    })
    .option('n',{
        alias: 'name',
        type: 'string',
        default: 'table',
        describe:'File name'
    })
    .option('d',{
        alias: 'destination',
        type: 'string',
        default: './outputs',
        describe: 'File destination'
    })
    .check((argv,options)=>{

        if( argv.b < 1 ) {
            throw 'Error: base must be greater than 0';
        }
        return true
    })
    .parseSync();
