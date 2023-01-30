import * as fs from 'fs'
import {dirname} from 'path'
import {describe, test, expect, beforeAll} from '@jest/globals'
import {decode, writeFile} from '../src/utils'

const pathfile = `${dirname(__dirname)}/example`

let base64String: string
let binary: Buffer
let fullpath: string

beforeAll(() => {
  base64String = fs.readFileSync(pathfile, {encoding: 'base64'})
  binary = fs.readFileSync(pathfile)
  fullpath = writeFile(binary, 'example')
})

describe('decode method', () => {
  test('it should decode base64 string to binary', () => {
    expect(decode(base64String)).toEqual(binary)
  })
})

describe('writeFile method', () => {
  test('it should write the file into path', () => {
    expect(fs.existsSync(fullpath)).toEqual(true)
  })
})
