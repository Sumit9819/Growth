import { defineField, defineType } from 'sanity'

export const service = defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
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
            name: 'metaDescription',
            title: 'Meta Description',
            type: 'text',
            description: 'SEO meta description (155-160 characters)',
            validation: Rule => Rule.max(160),
        }),
        defineField({
            name: 'description',
            title: 'Short Description',
            type: 'text',
            description: 'Brief description for service cards',
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name (e.g., "Search", "BarChart")',
        }),

        // Hero Section
        defineField({
            name: 'heroHeadline',
            title: 'Hero Headline',
            type: 'string',
            description: 'Main H1 headline (SEO keyword-rich)',
        }),
        defineField({
            name: 'heroSubheadline',
            title: 'Hero Subheadline',
            type: 'text',
            description: 'Supporting copy addressing pain point',
        }),

        // Problem/Solution
        defineField({
            name: 'problemStatement',
            title: 'Problem Statement',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'What problems does this service solve?',
        }),
        defineField({
            name: 'solutionOverview',
            title: 'Solution Overview',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'How this service solves the problem',
        }),

        // Benefits
        defineField({
            name: 'benefits',
            title: 'Key Benefits',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'title', type: 'string', title: 'Benefit Title' },
                    { name: 'description', type: 'text', title: 'Description' },
                    { name: 'icon', type: 'string', title: 'Icon Name' },
                ],
            }],
        }),

        // Process/How It Works
        defineField({
            name: 'process',
            title: 'Process Steps',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'step', type: 'string', title: 'Step Number/Name' },
                    { name: 'title', type: 'string', title: 'Title' },
                    { name: 'description', type: 'text', title: 'Description' },
                ],
            }],
        }),

        // Results/Case Studies
        defineField({
            name: 'results',
            title: 'Results & Case Studies',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'metric', type: 'string', title: 'Metric (e.g., "300%")' },
                    { name: 'description', type: 'string', title: 'What improved' },
                    { name: 'clientName', type: 'string', title: 'Client Name' },
                    { name: 'clientRole', type: 'string', title: 'Client Role' },
                    { name: 'testimonial', type: 'text', title: 'Testimonial Quote' },
                ],
            }],
        }),

        // FAQs
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'question', type: 'string', title: 'Question' },
                    { name: 'answer', type: 'text', title: 'Answer' },
                ],
            }],
        }),

        // Main Content
        defineField({
            name: 'content',
            title: 'Main Content',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Additional detailed content',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
        },
    },
})
