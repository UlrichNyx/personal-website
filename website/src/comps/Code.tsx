import * as React from 'react';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

interface CodeType {
  children: React.ReactNode;
  language?: string;
}

const Code: React.FunctionComponent<CodeType> = ({ children, language }) => {
  const [copied, setCopied] = React.useState(false);

  const copy = (): void => {
    navigator.clipboard.writeText(children?.toString() ?? '').catch(console.error);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      style={{
        borderRadius: 6,
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        width: '100%',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '5px 12px 5px 16px',
          backgroundColor: 'rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <Typography
          variant='caption'
          style={{ opacity: 0.35, letterSpacing: 1.5, fontFamily: 'monospace', fontSize: 10 }}
        >
          {language?.toUpperCase() ?? 'SHELL'}
        </Typography>
        <IconButton size='small' onClick={copy} style={{ opacity: 0.5, padding: 4 }}>
          {copied
            ? <CheckIcon style={{ fontSize: 14, color: '#4ec9b0' }} />
            : <ContentCopyIcon style={{ fontSize: 14 }} />}
        </IconButton>
      </div>

      <pre
        style={{
          margin: 0,
          padding: '12px 16px',
          backgroundColor: 'rgba(255,255,255,0.03)',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-all',
        }}
      >
        <code style={{ fontFamily: 'monospace', fontSize: 13, lineHeight: 1.7, opacity: 0.85 }}>
          {children}
        </code>
      </pre>
    </div>
  );
};

export default Code;
