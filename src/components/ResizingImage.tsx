type ImageProps = {
  src: string
  alt: string
  width: number
  height: number
  loading?: 'lazy' | 'eager' | undefined
}

const isDev = import.meta.env.DEV

export const ResizingImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy'
}) => {
  const imageSrc = isDev ? src : `/cdn-cgi/image/height=${height},width=${width},format=auto${src}`

  return (
    <img src={imageSrc} alt={alt} width={width} height={height} loading={loading} />
  )
}
