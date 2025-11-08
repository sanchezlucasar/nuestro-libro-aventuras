export interface Photo {
  src: string;
  alt: string;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  size: { width: string; height: string };
  rotation?: string;
  style?: 'polaroid' | 'rounded';
}

export interface TextElement {
  content: string;
  position: { top?: string; left?: string; right?: string; bottom?: string };
  size: { width: string };
  font: 'fantasy' | 'body' | 'script';
  fontSize: string;
  textAlign?: 'left' | 'center' | 'right';
  rotation?: string;
  color?: string;
}

export interface PageContent {
  id: number;
  photos: Photo[];
  texts: TextElement[];
  background?: string;
}
