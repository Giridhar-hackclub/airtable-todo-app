const Airtable = require('airtable')

// Authenticate
Airtable.configure({
  apiKey: process.env.AIRTABLE_API_KEY,
})

// Initialize a base
const base = Airtable.base(process.env.AIRTABLE_BASE_ID)

// Reference a table
const table = base(process.env.AIRTABLE_TABLE_NAME)

// to make record meaningful.
const getMinifiedRecord = (record) => {
  if (!record.fields.completed) {
    record.fields.completed = false
  }
  return {
    id: record.id,
    fields: record.fields,
  }
}

// To get minified records array
const minifyRecords = (records) =>
  records.map((record) => getMinifiedRecord(record))


export { table, minifyRecords, getMinifiedRecord }