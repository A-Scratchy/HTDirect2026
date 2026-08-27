import {defineType, defineField} from 'sanity'
import {CalendarIcon} from '@sanity/icons'

export const event = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  icon: CalendarIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Event Name',
      type: 'string',
      description: 'e.g. "Halifax Town FC — Match Day Cover"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          {title: 'Sports', value: 'sports'},
          {title: 'Music / Festival', value: 'music'},
          {title: 'Corporate', value: 'corporate'},
          {title: 'Community', value: 'community'},
          {title: 'Charity', value: 'charity'},
          {title: 'Education', value: 'education'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'showOnWebsite',
      title: 'Show on website',
      type: 'boolean',
      description: 'Toggle off to hide this event from the public site',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
    },
  },
})
