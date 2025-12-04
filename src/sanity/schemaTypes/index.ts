import { type SchemaTypeDefinition } from 'sanity'
import { service } from './service'
import { post } from './post'
import { teamMember } from './teamMember'
import { portfolio } from './portfolio'
import { page } from './page'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [service, post, teamMember, portfolio, page],
}
