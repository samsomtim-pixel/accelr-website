'use client'

import ReactMarkdown from 'react-markdown';

interface ReportViewProps {
  report: string;
}

export function ReportView({ report }: ReportViewProps) {
  return (
    <div className="prose prose-invert prose-green max-w-none">
      <ReactMarkdown
        components={{
          h1: ({children}) => <h1 className="text-3xl font-bold text-white mb-6">{children}</h1>,
          h2: ({children}) => <h2 className="text-xl font-semibold text-green-400 mt-8 mb-4">{children}</h2>,
          h3: ({children}) => <h3 className="text-lg font-semibold text-white mt-6 mb-3">{children}</h3>,
          table: ({children}) => <table className="w-full border-collapse my-6">{children}</table>,
          th: ({children}) => <th className="border border-gray-700 bg-gray-800 px-4 py-2 text-left text-green-400">{children}</th>,
          td: ({children}) => <td className="border border-gray-700 px-4 py-2 text-gray-300">{children}</td>,
          p: ({children}) => <p className="text-gray-300 mb-4">{children}</p>,
          li: ({children}) => <li className="text-gray-300 ml-4 mb-2">{children}</li>,
          ul: ({children}) => <ul className="list-disc mb-4">{children}</ul>,
          ol: ({children}) => <ol className="list-decimal mb-4">{children}</ol>,
          strong: ({children}) => <strong className="text-white font-semibold">{children}</strong>,
          code: ({children}) => <code className="bg-gray-800 px-2 py-1 rounded text-green-400">{children}</code>,
        }}
      >
        {report}
      </ReactMarkdown>
      
      <div className="mt-12 p-6 bg-green-900/20 border border-green-500/30 rounded-lg">
        <h3 className="text-xl font-semibold text-white mb-2">Volgende stap</h3>
        <p className="text-gray-300 mb-4">Plan een gratis diagnose-gesprek (30 min) waarin we dit rapport doorlopen.</p>
        <a href="mailto:tim@accelr.io?subject=Scan rapport bespreken" className="inline-block bg-green-500 text-black font-semibold px-6 py-3 rounded-lg hover:bg-green-400 transition">
          Plan gesprek →
        </a>
      </div>
    </div>
  );
}



