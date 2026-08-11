import { mkdir, rm } from 'node:fs/promises'
import path from 'node:path'

import sharp from 'sharp'

import { responsiveImages } from '../src/app/utils/responsiveImages'

const sourceDirectory = path.join(process.cwd(), 'src', 'media-originals', 'images')
const outputDirectory = path.join(process.cwd(), 'public', 'assets', 'images', 'responsive')

const generateVariant = async (source: string, name: string, width: number): Promise<void> => {
  await sharp(path.join(sourceDirectory, source))
    .resize({ width, withoutEnlargement: true })
    .avif({ quality: 58, effort: 5 })
    .toFile(path.join(outputDirectory, `${name}-${width}.avif`))
}

const main = async () => {
  await rm(outputDirectory, { recursive: true, force: true })
  await mkdir(outputDirectory, { recursive: true })
  const images = Object.entries(responsiveImages)
  await Promise.all(images.flatMap(([publicPath, image]) => {
    const name = publicPath.slice(publicPath.lastIndexOf('/') + 1, publicPath.lastIndexOf('.'))
    return image.widths.map(width => generateVariant(image.original, name, width))
  }))
  console.log(`Generated ${images.reduce((total, [, image]) => total + image.widths.length, 0)} responsive hero images.`)
}

void main()
