import { defineField, defineType } from 'sanity'

export const portfolio = defineType({
    name: 'portfolio',
    title: 'Portfolio / Work',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Project Title',
            type: 'string',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Enterprise SEO', value: 'enterprise-seo' },
                    { title: 'Lead Generation', value: 'lead-generation' },
                    { title: 'UI/UX Design', value: 'ui-ux-design' },
                    { title: 'Social Media', value: 'social-media' },
                    { title: 'PPC', value: 'ppc' },
                ],
            },
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'client',
            title: 'Client Name',
            type: 'string',
        }),
        defineField({
            name: 'metric',
            title: 'Key Metric/Result',
            type: 'string',
            description: 'e.g., "300% Traffic Growth", "$2M Revenue Increase"',
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            description: 'Brief description for cards',
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Technologies, strategies, or keywords',
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'challenge',
            title: 'Challenge',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'What problem did the client face?',
        }),
        defineField({
            name: 'solution',
            title: 'Solution',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'How did you solve it?',
        }),
        defineField({
            name: 'results',
            title: 'Results',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Measurable outcomes',
        }),
        defineField({
            name: 'testimonial',
            title: 'Client Testimonial',
            type: 'object',
            fields: [
                { name: 'quote', type: 'text', title: 'Quote' },
                { name: 'author', type: 'string', title: 'Author Name' },
                { name: 'role', type: 'string', title: 'Author Role' },
            ],
        }),
        defineField({
            name: 'featured',
            title: 'Featured Project',
            type: 'boolean',
            description: 'Show on homepage or featured sections',
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published Date',
            type: 'datetime',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Order in which project appears',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'metric',
            media: 'coverImage',
        },
    },
})
