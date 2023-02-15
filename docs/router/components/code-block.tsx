import React from 'react';
import Highlight, { defaultProps, PrismTheme } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');

  return (
    <Highlight
      {...defaultProps}
      theme={vsDark as PrismTheme}
      code={children.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{ ...style, padding: '15px', borderRadius: '3px', margin: '0', fontSize: '15px' }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
