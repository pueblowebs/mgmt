import React from 'react';

interface TextNode {
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  strikethrough?: boolean;
  code?: boolean;
}

interface Block {
  type: string;
  level?: number;
  format?: 'unordered' | 'ordered';
  children: (TextNode | Block)[];
  url?: string;
  image?: {
    url: string;
    alternativeText?: string;
  };
}

export function PayloadBlocks({ content }: { content: Block[] | any }) {
  if (!content || !Array.isArray(content)) return null;

  return (
    <>
      {content.map((block, index) => renderBlock(block, index))}
    </>
  );
}

function renderBlock(block: Block, index: number) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p key={index} className="mb-4">
          {block.children.map((child, i) => renderNode(child, i))}
        </p>
      );
    case 'heading':
      const level = block.level || 1;
      const headingClasses: Record<number, string> = {
        1: 'text-4xl font-serif mb-6',
        2: 'text-3xl font-serif mb-5',
        3: 'text-2xl font-serif mb-4',
        4: 'text-xl font-bold mb-3',
        5: 'text-lg font-bold mb-2',
        6: 'text-base font-bold mb-2',
      };
      
      const className = headingClasses[level] || headingClasses[1];
      const headingChildren = block.children.map((child, i) => renderNode(child, i));

      switch (level) {
        case 1: return <h1 key={index} className={className}>{headingChildren}</h1>;
        case 2: return <h2 key={index} className={className}>{headingChildren}</h2>;
        case 3: return <h3 key={index} className={className}>{headingChildren}</h3>;
        case 4: return <h4 key={index} className={className}>{headingChildren}</h4>;
        case 5: return <h5 key={index} className={className}>{headingChildren}</h5>;
        case 6: return <h6 key={index} className={className}>{headingChildren}</h6>;
        default: return <h1 key={index} className={className}>{headingChildren}</h1>;
      }
    case 'list':
      const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
      return (
        <ListTag key={index} className="list-inside list-disc mb-4 space-y-2">
          {block.children.map((child, i) => renderBlock(child as Block, i))}
        </ListTag>
      );
    case 'list-item':
      return (
        <li key={index}>
          {block.children.map((child, i) => renderNode(child, i))}
        </li>
      );
    case 'quote':
      return (
        <blockquote key={index} className="border-l-4 border-accent pl-4 italic mb-4 text-foreground/70">
          {block.children.map((child, i) => renderNode(child, i))}
        </blockquote>
      );
    case 'image':
      return (
        <div key={index} className="my-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={block.image?.url} 
            alt={block.image?.alternativeText || ''} 
            className="rounded-lg w-full"
          />
        </div>
      );
    default:
      console.warn('Unknown block type:', block.type);
      return null;
  }
}

function renderNode(node: TextNode | Block | any, index: number) {
  if (node.type === 'link') {
    return (
      <a key={index} href={node.url} className="text-accent underline hover:opacity-80">
        {node.children.map((child: any, i: number) => renderNode(child, i))}
      </a>
    );
  }

  let content = node.text || '';

  if (node.bold) content = <strong key={index}>{content}</strong>;
  if (node.italic) content = <em key={index}>{content}</em>;
  if (node.underline) content = <u key={index}>{content}</u>;
  if (node.code) content = <code key={index} className="bg-secondary/20 p-1 rounded font-mono text-sm">{content}</code>;

  return content;
}
