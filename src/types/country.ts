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

export type stateCountries = {
    countries: Country[],
    filtered: Country[],
    loading: boolean,
    singleCountry: Country[],
    sortName: "asc"|"desc"
}