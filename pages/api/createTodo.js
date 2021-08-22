import { table, getMinifiedRecord } from '../utils/Airtable'

export default async (req, res) => {
  const { description } = req.body
  try {
    const newRecords = await table.create([{ fields: { description } }])
    res.status(200).json(getMinifiedRecord(newRecords[0]))
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: 'Something went wrong! 😕' })
  }
}