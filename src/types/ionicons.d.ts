import type { CSSProperties } from 'react'

type IonIconProps = {
  name?: string
  class?: string
  className?: string
  style?: CSSProperties
  [key: string]: unknown
}

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': IonIconProps
    }
  }
}
