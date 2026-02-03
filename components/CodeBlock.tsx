export default function CodeBlock({ code, language = 'json', title }: { code: string, language?: string, title?: string }) {
  return (
    <div className="rounded-md border border-border-strong bg-canvas-dark overflow-hidden font-mono text-xs leading-relaxed shadow-sm">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
          <span className="text-gray-400">{title}</span>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
          </div>
        </div>
      )}
      <div className="p-4 overflow-x-auto text-gray-300">
        <pre><code>{code}</code></pre>
      </div>
    </div>
  );
}
