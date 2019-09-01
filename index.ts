import express from 'express'
import { auth } from './src/routes'
import { logger, format, transports } from './config/logger'
//logging
const app = express()

//config
const port = 3001 || process.env.PORT // default port to listen
const host = "http://localhost" || process.env.HOST
//db

// config
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// middleware
app.use((req, _res, next) => {
	logger.log(
		{
			level: 'info',
			message: `Source IP: ${req.ip} Path: ${req.path} Payload: ${req.body}`,
		})
	next()
})

// routes
app.use('/auth', auth)


if (process.env.NODE_ENV !== 'production') {
	logger.add(new transports.Console({
		format: format.combine(
			format.colorize(),
			format.simple()
		)
	}));
}

// start the Express server
app.listen(port, () => {
	console.log(`server started at ${host}:${port}`);
});
