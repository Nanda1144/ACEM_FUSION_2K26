import { useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function RichTextEditor({ value, onChange, placeholder, className }: RichTextEditorProps) {
  const quillRef = useRef<ReactQuill>(null);

  useEffect(() => {
    // Apply custom styles to Quill editor
    const editor = document.querySelector('.ql-editor');
    if (editor) {
      (editor as HTMLElement).style.minHeight = '200px';
      (editor as HTMLElement).style.fontSize = '14px';
    }
  }, []);

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'align': [] }, { 'align': 'center' }, { 'align': 'right' }, { 'align': 'justify' }],
      ['link'],
      ['clean']
    ]
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'align',
    'link'
  ];

  return (
    <div className={className}>
      <ReactQuill
        ref={quillRef}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        className="bg-background text-foreground"
      />
      <style>{`
        .ql-toolbar {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
          border-radius: 0.5rem 0.5rem 0 0;
        }
        .ql-container {
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          border-radius: 0 0 0.5rem 0.5rem;
          font-family: inherit;
        }
        .ql-editor {
          color: hsl(var(--foreground));
          min-height: 200px;
        }
        .ql-editor.ql-blank::before {
          color: hsl(var(--muted-foreground));
          font-style: italic;
        }
        .ql-snow .ql-stroke {
          stroke: hsl(var(--foreground));
        }
        .ql-snow .ql-fill {
          fill: hsl(var(--foreground));
        }
        .ql-snow .ql-picker-label {
          color: hsl(var(--foreground));
        }
        .ql-snow .ql-picker-options {
          background: hsl(var(--card));
          border: 1px solid hsl(var(--border));
        }
        .ql-snow .ql-picker-item:hover {
          color: hsl(var(--primary));
        }
        .ql-toolbar button:hover,
        .ql-toolbar button.ql-active {
          color: hsl(var(--primary));
        }
        .ql-toolbar button:hover .ql-stroke,
        .ql-toolbar button.ql-active .ql-stroke {
          stroke: hsl(var(--primary));
        }
        .ql-toolbar button:hover .ql-fill,
        .ql-toolbar button.ql-active .ql-fill {
          fill: hsl(var(--primary));
        }
      `}</style>
    </div>
  );
}
