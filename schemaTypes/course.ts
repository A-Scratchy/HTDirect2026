import {defineType, defineField, defineArrayMember} from 'sanity'
import {DocumentTextIcon} from '@sanity/icons'

export const course = defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Course Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g. "1 Day", "3 Days", "12 Hours"',
    }),
    defineField({
      name: 'accreditation',
      title: 'Accreditation / Level',
      type: 'string',
      description: 'e.g. "HSE Approved", "Qualsafe Level 2"',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'targetAudience',
      title: 'Who is this course for?',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'pricePerPerson',
      title: 'Price per Person (£)',
      type: 'number',
    }),
    defineField({
      name: 'groupPrice',
      title: 'Group Price (£)',
      type: 'number',
      description: 'Optional — leave blank if no group rate',
    }),
    defineField({
      name: 'groupSize',
      title: 'Group Size',
      type: 'number',
      description: 'How many people does the group price cover?',
    }),
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'availableDates',
      title: 'Available Dates',
      type: 'array',
      of: [defineArrayMember({type: 'date'})],
      description: 'Add upcoming course dates — these show on the website automatically',
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active — show on website', value: 'active'},
          {title: 'Coming Soon', value: 'coming-soon'},
          {title: 'Hidden — do not show', value: 'hidden'},
        ],
        layout: 'radio',
      },
      initialValue: 'active',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'duration',
      media: 'image',
    },
  },
})
