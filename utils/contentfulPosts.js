const space = 'gjr4qnjfik1l'
const accessToken = 'mQYfSsuWL7372KS4KPJlmmvsSWXSHKtQ9cyU0djHTrA'

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const entries = await client.getEntries()
  if (entries.items) return entries.items
  console.log(`Error getting Entries for ${contentType.name}.`)
}

export default { fetchEntries }
