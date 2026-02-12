import React from 'react';
import { Link } from 'react-router-dom';

/**
 * BlogContentRenderer - Renders blog content with support for:
 * - Markdown-style links [text](url)
 * - HTML strong tags <strong>text</strong>
 * - Internal and external link handling
 */
export function BlogContentRenderer({ content }) {
  // Handle undefined or null content
  if (!content || typeof content !== 'string') {
    return <>{content || ''}</>;
  }

  // First, handle HTML strong tags
  let processedContent = content.replace(/<strong>(.*?)<\/strong>/g, '<strong>$1</strong>');
  
  // Regular expression to match markdown-style links [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = linkRegex.exec(processedContent)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      const beforeText = processedContent.slice(lastIndex, match.index);
      parts.push(renderHtmlContent(beforeText, `before-${match.index}`));
    }
    
    // Add the link
    const linkText = match[1];
    const linkUrl = match[2];
    
    // Check if it's an internal link (starts with /) or external link
    if (linkUrl.startsWith('/') || linkUrl.startsWith('#')) {
      parts.push(
        <Link 
          key={match.index} 
          to={linkUrl}
          className="text-[#0B3D4C] hover:text-[#1B6B7A] !underline decoration-current decoration-1 underline-offset-2 font-medium"
        >
          {linkText}
        </Link>
      );
    } else {
      parts.push(
        <a 
          key={match.index} 
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0B3D4C] hover:text-[#1B6B7A] !underline decoration-current decoration-1 underline-offset-2 font-medium"
        >
          {linkText}
        </a>
      );
    }
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text after the last link
  if (lastIndex < processedContent.length) {
    const remainingText = processedContent.slice(lastIndex);
    parts.push(renderHtmlContent(remainingText, 'remaining'));
  }
  
  return <>{parts}</>;
}

// Helper function to render HTML content (like <strong> tags)
function renderHtmlContent(text, keyPrefix) {
  // Split by strong tags and render accordingly
  const parts = text.split(/(<strong>.*?<\/strong>)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
      const content = part.slice(8, -9); // Remove <strong> and </strong>
      return <strong key={`${keyPrefix}-${index}`} className="font-bold">{content}</strong>;
    }
    return <React.Fragment key={`${keyPrefix}-${index}`}>{part}</React.Fragment>;
  });
}

export default BlogContentRenderer;
