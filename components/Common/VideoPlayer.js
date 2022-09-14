import { useCallback, useEffect, useState } from 'react'
import 'video.js/dist/video-js.css'
import videojs from 'video.js'
const Player = (props) => {
  const [videoEl, setVideoEl] = useState(null)
  const onVideo = useCallback((el) => {
    setVideoEl(el)
  }, [])

  useEffect(() => {
    if (videoEl == null) return
    const player = videojs(videoEl, props)
    return () => {
      player.dispose()
    }
  }, [props, videoEl])

  return (
    <>
      <div data-vjs-player style={{ marginTop: "6%" }}>
        <video  ref={onVideo} className="video-js  vjs-big-play-centered"     
        />
      </div>
    </>
  )
}

export default Player
