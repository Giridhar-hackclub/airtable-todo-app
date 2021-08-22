import { table, minifyRecords } from '../../utils/Airtable'

export default async (_req, res) => {
	try {
		const records = await table.select({}).firstPage()
    const minfiedRecords = minifyRecords(records)
		res.status(200).json(minfiedRecords)
	} catch (error) {
		console.error(err)
		res.status(500).json({ msg: 'Something went wrong! 😕' })
	}
}