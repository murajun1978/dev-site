type ImageProps = {
  src: string
  alt: string
  width: number
  height: number
  loading?: 'lazy' | 'eager' | undefined
  isDev?: boolean
}

export const ResizingImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  isDev = true
}) => {
  const imageSrc = isDev ? src : `/cdn-cgi/image/height=${height},width=${width},format=auto${src}`

  return (
    <img src={imageSrc} alt={alt} width={width} height={height} loading={loading} />
  )
}
