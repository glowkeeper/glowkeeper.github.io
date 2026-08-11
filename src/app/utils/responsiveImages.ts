type ResponsiveImage = {
  height: number
  original: string
  width: number
  widths: readonly number[]
}

export const responsiveImages: Record<string, ResponsiveImage> = {
  '/assets/images/me.avif': { height: 1600, original: 'me.jpg', width: 1600, widths: [480, 768, 1200, 1600] },
  '/assets/images/standingMan.avif': { height: 900, original: 'standingMan.jpeg', width: 900, widths: [480, 768, 900] },
  '/assets/images/dCBrighton190318.avif': { height: 615, original: 'dCBrighton190318.png', width: 1188, widths: [480, 768, 1188] },
  '/assets/images/coding.avif': { height: 468, original: 'coding.jpg', width: 774, widths: [480, 774] },
  '/assets/images/writing.webp': { height: 648, original: 'writing.jpg', width: 648, widths: [480, 648] },
  '/assets/images/theGuitarist.avif': { height: 768, original: 'theGuitarist.jpg', width: 768, widths: [480, 768] },
}

export const responsiveImage = (source: string) => {
  const image = responsiveImages[source]

  if (!image) {
    throw new Error(`No responsive image configuration found for ${source}`)
  }

  const name = source.slice(source.lastIndexOf('/') + 1, source.lastIndexOf('.'))
  const extension = source.slice(source.lastIndexOf('.') + 1)
  const pathForWidth = (width: number) => `/assets/images/responsive/${name}-${width}.${extension}`

  return {
    height: image.height,
    src: pathForWidth(image.widths.at(-1)!),
    srcSet: image.widths.map(width => `${pathForWidth(width)} ${width}w`).join(', '),
    width: image.width,
  }
}
