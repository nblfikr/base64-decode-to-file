import * as fs from 'fs'

export const writeFile = (buffer: Buffer, filename: string): string => {
  const fullPath = `/tmp/${filename}`

  fs.writeFile(fullPath, buffer, err => {
    if (err) return err
  })

  return fullPath
}

export const decode = (base64String: string): Buffer => {
  return Buffer.from(base64String, 'base64')
}
