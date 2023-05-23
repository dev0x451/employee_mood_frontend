import { ReactNode } from 'react';


export interface article {
  type: string;
  title: string;
  length: string;
  banner: string;
}


export type CallbackFunction = () => void;

export interface Image {
  src: string;
  title: string;
  id: string
}

export interface Card {
  mainImage: Image;
}

export interface FullCard extends Card {
  images: Image[];
  description: string;
}
// 7
// 7
// 7
// 7
// 7
// 7

export interface DragItem {
  id: string;
  children: ReactNode;
}

export interface Column {
  name: string,
  items: DragItem[],
}

export interface Columns {
  [key: string]: Column,
}

export interface MathSign {
  id: string,
  content: string
}
