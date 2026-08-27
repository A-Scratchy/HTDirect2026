import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zap5gndn',
    dataset: 'production'
  },
  studioHost: 'htdirect',
  deployment: {
    appId: 'jghptbp0qqtagtnmd1g8by1m',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
})
