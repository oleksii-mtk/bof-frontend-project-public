export interface Country{
    name: {official:string},
    currencies:{
        [key:string]:{
            name:string,
            symbol:string
        }
    },
    capital:string[],
    flags: string[]

}