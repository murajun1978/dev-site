type ImageProps = {
  src: string
  alt: string
  width: number
  height: number
  loading?: 'lazy' | 'eager' | undefined
}

export const ResizingImage: React.FC<ImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy'
}) => {
  const isCfImage = import.meta.env.PUBLIC_USE_CLOUDFLARE_IMAGE
  const imageSrc = isCfImage ? `/cdn-cgi/image/height=${height},width=${width},format=auto${src}` : src

  return (
    <img src={imageSrc} alt={alt} width={width} height={height} loading={loading} />
  )
}
