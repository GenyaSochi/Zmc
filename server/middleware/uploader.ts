import Busboy from 'busboy'
import path from 'path'
import sharp from 'sharp'
import fs from 'fs'

export default defineEventHandler(async (event) => {
  if (event.method === 'POST') {
    const contentType = getRequestHeader(event, "content-type")
    if (contentType?.includes('multipart/form-data;')) await useFiles(event)
  }
})

const useFiles = async (event: any) => {
  const { req } = event
  if (req.method === 'POST') {
    return new Promise((resolve) => {
      const files = [] as any
      const fields = {} as any
      const busboy = Busboy({ headers: req.headers })
      busboy.on('file', (name:string, file:any, info:any) => {
        const { filename, encoding, mimeType } = info
        if (fields.zayavka) {
            const newFileName = Date.now() + info.filename
            console.log(`File [${name}]: filename: ${filename}, encoding: ${encoding}, mimeType: ${mimeType}`)
            const saveTo = path.join(process.cwd(), 'public/files', `${newFileName}`)
            const data = [] as any
            let fileAsBuffer
    
            file.on('data', (chunk:any) => {
                data.push(chunk)
              })
              .on('close', async () => {
                // merge data chunks with buffer and attach them to body
                fileAsBuffer = Buffer.concat(data)
                fs.createWriteStream(saveTo).write(fileAsBuffer)                
              })
              .on('end', () => {
                files.push({
                  fieldname: name,
                  filename,
                  newFileName,
                  encoding,
                  mimetype: mimeType,
                })
              })           
        } else {
            const newFileName = Date.now() + info.filename + '.webp'
            console.log(path.join(process.cwd(), '../public/img'))
            const saveTo = path.join(process.cwd(), '../public/img', `${newFileName}`)
            // console.log('saveTo', saveTo)
            // file.pipe(fs.createWriteStream(saveTo))
            
            const data = [] as any
            let fileAsBuffer
    
            file.on('data', (chunk:any) => {
              data.push(chunk)
            })
            .on('close', async () => {
              // merge data chunks with buffer and attach them to body
              fileAsBuffer = Buffer.concat(data)
              
              await sharp(fileAsBuffer)
              .webp({ quality: 80 })
              .toFile(saveTo)
            })
            .on('end', () => {
              files.push({
                fieldname: name,
                filename,
                newFileName,
                encoding,
                mimetype: mimeType,
              })
            })
        }
      })
      busboy.on('field', (name:string, value:any, info:any) => {
        fields[name] = value
      })
      busboy.on('finish', () => {
        event.context.files = files
        event.context.fields = fields
        // resolve({ files, fields })
        resolve({})
      })
      req.pipe(busboy)
    })
  }
}