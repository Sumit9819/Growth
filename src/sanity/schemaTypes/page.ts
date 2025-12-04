import { defineField, defineType } from 'sanity'

export const page = defineType({
    name: 'page',
    title: 'Page',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Page Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'The URL path for this page (e.g., "about", "contact", "/"). Use "/" for homepage.',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            description: 'SEO meta description',
            validation: Rule => Rule.max(160),
        }),
        defineField({
            name: 'customSchema',
            title: 'Custom Schema (JSON-LD)',
            type: 'text',
            description: 'Paste your custom JSON-LD schema here. Do not include <script> tags.',
            rows: 10,
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'slug.current',
        },
    },
})
