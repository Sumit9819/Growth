import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
    projectId: projectId || 'placeholder',
    dataset: dataset || 'production',
    apiVersion,
    useCdn,
    stega: {
        studioUrl: process.env.NODE_ENV === 'development'
            ? 'http://localhost:3000/studio'
            : 'https://growthmeta.vercel.app/studio',
    }
})
