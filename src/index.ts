import * as core from '@actions/core'
import {decode, writeFile} from './utils'

async function run(): Promise<void> {
  try {
    const base64 = core.getInput('base64')
    const filename = core.getInput('filename')

    if (base64 === '' || filename === '') {
      core.setFailed('Please provide the needed params!')
      return
    }

    const buffer = decode(base64)

    const fullpath = writeFile(buffer, filename)
    core.debug(fullpath)

    core.setOutput('fullpath', fullpath)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
