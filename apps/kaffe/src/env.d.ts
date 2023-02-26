/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_ENDPOINT_DEV: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
