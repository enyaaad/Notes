export interface Note{
    id: string,
    createdAt: string,
    title: string,
    preview: string,
    image: string,
    description: string,
    operationName?:string,
    variables?: Object,
    query?: string,
}
