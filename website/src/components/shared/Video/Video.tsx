import React, { FunctionComponent, VideoHTMLAttributes } from 'react';

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  defaultSrc: string;
  webmSrc: string;
  fallback: string;
}

export const Video: FunctionComponent<VideoProps> = (props) => {
  const {
    className,
    defaultSrc,
    webmSrc,
    fallback,
    width = '100%',
    loop = true,
    autoPlay = true,
    muted = true,
    ...videoProps
  } = props;

  return (
    <video
      className={className}
      width={width}
      loop={loop}
      autoPlay={autoPlay}
      muted={muted}
      {...videoProps}
    >
      <source src={defaultSrc} type="video/mp4" />
      <source src={webmSrc} type="video/webm" />
      <img
        src={fallback}
        title="Your browser does not support the <video> tag"
      />
    </video>
  );
};

export default Video;
