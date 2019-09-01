import * as express from 'express'
const router = express.Router()

router.get('/', (_req, res) => {
    res.json({ code: 200 })
})

export default router