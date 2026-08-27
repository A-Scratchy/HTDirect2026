import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {CogIcon} from '@sanity/icons'
import type {StructureResolver} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

const SINGLETONS = ['siteSettings']

const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings'),
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !SINGLETONS.includes(item.getId() ?? ''),
      ),
    ])

export default defineConfig({
  name: 'default',
  title: 'HT Direct',

  projectId: 'zap5gndn',
  dataset: 'production',

  plugins: [structureTool({structure}), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
