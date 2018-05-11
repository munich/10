'use strict'

const path = require('path')
const container = require('@arkecosystem/core-container')

exports.setUp = async () => {
  const config = path.resolve(__dirname, '../../../core-config/lib/networks/testnet')

  container.init({ data: '~/.ark', config }, {
    exclude: ['@arkecosystem/core-blockchain']
  })

  await container.plugins.registerGroup('init', {config})
  await container.plugins.registerGroup('beforeCreate')

  return container
}

exports.tearDown = async () => container.tearDown()
