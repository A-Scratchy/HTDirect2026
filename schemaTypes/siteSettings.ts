import {defineType, defineField} from 'sanity'
import {CogIcon} from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Homepage Headline',
      type: 'string',
      description: 'Main headline shown on the homepage',
      initialValue: 'First Class First-Aid Training & Event Medical Cover',
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Homepage Subtext',
      type: 'text',
      rows: 2,
      initialValue:
        'We make events safe and equip people with the skills and knowledge to save lives. Based in Halifax, covering events across Yorkshire and beyond.',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Us Text',
      type: 'text',
      rows: 5,
      initialValue:
        'We believe in offering affordable, high quality, local medical teams to events of all sizes. We have experience providing medical staff to small scale events up to large town-wide events attracting multiple thousands of people.',
    }),
    defineField({
      name: 'phone1',
      title: 'Primary Phone',
      type: 'string',
      initialValue: '01422 64 60 66',
    }),
    defineField({
      name: 'phone2',
      title: 'Secondary Phone',
      type: 'string',
    }),
    defineField({
      name: 'emailTraining',
      title: 'Training Email',
      type: 'string',
      initialValue: 'training@htdirect.co.uk',
    }),
    defineField({
      name: 'emailEvents',
      title: 'Events Email',
      type: 'string',
      initialValue: 'events@htdirect.co.uk',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      initialValue: '28 Clay House Lane\nGreetland\nHalifax\nHX4 8AW',
    }),
    defineField({
      name: 'showEventsPage',
      title: 'Show Upcoming Events page',
      type: 'boolean',
      description: 'Toggle off to hide the Events page and remove it from the navigation',
      initialValue: true,
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
  ],
})
