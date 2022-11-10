import React from 'react'

// eslint-disable-next-line
export const useChatScroll = (isReady: boolean): any => {
  const ref = React.useRef<HTMLDivElement>()

  React.useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight
    }
  }, [isReady])

  return ref
}
