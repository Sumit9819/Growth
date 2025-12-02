import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { post } from './post'
import { teamMember } from './teamMember'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [service, post, teamMember],
}
