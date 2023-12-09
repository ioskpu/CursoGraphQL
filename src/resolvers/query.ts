import { IResolvers } from "@graphql-tools/utils";


const query : IResolvers = {
    Query : {
        hola(): string {
            return 'Hola Mundo!!'
        },
        holaConNombre(__: void, { nombre } ): string {
            return `Hola Mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola Mundo curso GraphQL';
        }
    }
}

export default query;