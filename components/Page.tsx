import React from 'react';
import { PageContent, Photo, TextElement } from '../types';

interface PageProps {
  page: PageContent | null;
}

const getFontClass = (font: TextElement['font']) => {
  switch (font) {
    case 'fantasy':
      return 'font-fantasy';
    case 'script':
      return 'font-script';
    case 'body':
    default:
      return '';
  }
}

const Page: React.FC<PageProps> = ({ page }) => {
  if (!page) {
    return <div className="w-full h-full bg-[#F0EAD6]"></div>;
  }

  return (
    <div className="w-full h-full relative p-6 md:p-8 text-[#3A3F51] overflow-hidden" style={{ background: page.background || '#F0EAD6' }}>
      {page.photos.map((photo: Photo, index) => (
        <div
          key={`photo-${page.id}-${index}`}
          className="absolute transition-transform duration-300 hover:scale-105 hover:z-10"
          style={{
            top: photo.position.top,
            left: photo.position.left,
            right: photo.position.right,
            bottom: photo.position.bottom,
            width: photo.size.width,
            height: photo.size.height,
            transform: `rotate(${photo.rotation || '0deg'})`,
          }}
        >
          <img
            src={photo.src}
            alt={photo.alt}
            className={`object-cover w-full h-full ${photo.style === 'polaroid' ? 'polaroid' : 'rounded-lg shadow-xl'}`}
          />
        </div>
      ))}
      
      {page.texts.map((text: TextElement, index) => (
        <div
          key={`text-${page.id}-${index}`}
          className={`absolute ${getFontClass(text.font)}`}
          style={{
            top: text.position.top,
            left: text.position.left,
            right: text.position.right,
            bottom: text.position.bottom,
            width: text.size.width,
            fontSize: text.fontSize,
            textAlign: text.textAlign || 'left',
            transform: `rotate(${text.rotation || '0deg'})`,
            color: text.color || 'inherit',
            lineHeight: 1.2
          }}
        >
          {text.content}
        </div>
      ))}
    </div>
  );
};

export default Page;
