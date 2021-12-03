export interface Author {
  name: string,
  photo?: string
}

export interface Module {
  id: string,
  title: string,
  length: number,
  durationInSeconds: number
}

export interface Track {
  id: string
  title: string,
  author: Author,
  thumbnail?: string,
  length: number,
  modulesCount?: number,
  description?: string,
  numberOfViews?: number,
  modules: Module[],
  durationInSeconds: number
}

export interface TrackForHome {
  tracksForHome: Track[]
}

