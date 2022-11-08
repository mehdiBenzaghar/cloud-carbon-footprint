/*
 * © 2021 Thoughtworks, Inc.
 */

if (process.env.NODE_ENV === 'production') {
  require('module-alias/register')
}

import express from 'express'
import helmet from 'helmet'

import { createRouter } from './api'
import auth from './auth'
import { Logger } from '@cloud-carbon-footprint/common'
import swaggerUi from 'swagger-ui-express'

const port = process.env.PORT || 4000
const httpApp = express()
const serverLogger = new Logger('server')

if (process.env.NODE_ENV === 'production') {
  httpApp.use(auth)
}

httpApp.use(helmet())

httpApp.use('/api', createRouter())

httpApp.use(
  '/docs',
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: '/swagger.json',
    },
  }),
)
// to serve the swagger.json file
httpApp.use(express.static(process.cwd() + '/public'))

httpApp.listen(port, () =>
  serverLogger.info(
    `Cloud Carbon Footprint Server listening at http://localhost:${port}`,
  ),
)
