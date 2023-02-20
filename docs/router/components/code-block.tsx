import React, { useState } from 'react';
import Highlight, { defaultProps, PrismTheme } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';
import { useTranslation } from 'react-i18next';

import cls from '../../components-docs/components/show-source-code/index.module.less';

const CodeBlock = ({ children, className }) => {
  const language = className.replace(/language-/, '');
  const [copied, setCopied] = useState<boolean>(false);
  const { t } = useTranslation(['doc']);

  const handleCopy = () => {
    navigator.clipboard.writeText(children.trim());
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className={cls.codeBlock}>
      <Highlight
        {...defaultProps}
        theme={vsDark as PrismTheme}
        code={children.trim()}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre
            className={className}
            style={{
              ...style,
              padding: '15px',
              borderRadius: '3px',
              margin: '0',
              fontSize: '15px',
            }}
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
      <button className={`${cls.copyButton} ${copied ? 'copied' : ''}`} onClick={handleCopy}>
        {copied ? t('Copied', { ns: ['doc'] }) : t('Copy', { ns: ['doc'] })}
      </button>
    </div>
  );
};

export default CodeBlock;
