import {defineType, defineField} from 'sanity'
import {StarIcon} from '@sanity/icons'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'organisation',
      title: 'Organisation',
      type: 'string',
      description: 'e.g. "Shay Stadium" or "Woodhouse Grove School"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'organisationSubtitle',
      title: 'Organisation Subtitle',
      type: 'string',
      description: 'Optional — e.g. "Halifax Town FC & Halifax Panthers"',
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name',
      type: 'string',
      description: 'Optional — leave blank if not attributing to a specific person',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 99,
    }),
    defineField({
      name: 'showOnWebsite',
      title: 'Show on website',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'organisation',
      subtitle: 'quote',
    },
    prepare({title, subtitle}) {
      return {
        title,
        subtitle: subtitle?.slice(0, 80) + (subtitle?.length > 80 ? '…' : ''),
      }
    },
  },
})
