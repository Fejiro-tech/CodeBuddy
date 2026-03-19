import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"

const MesssageBubble = ({ role, content }) => {
  const isUser = role === "user"

  // Regex to detect triple-backtick code blocks ```lang ... ```
  const codeRegex = /```(\w+)?\n([\s\S]*?)```/g
  const parts = []
  let lastIndex = 0
  let match

  while ((match = codeRegex.exec(content)) !== null) {
    if (match.index > lastIndex) {
      // Add text before code block
      parts.push({ type: "text", content: content.slice(lastIndex, match.index) })
    }
    // Add code block
    parts.push({ type: "code", lang: match[1] || "text", content: match[2] })
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < content.length) {
    // Add remaining text
    parts.push({ type: "text", content: content.slice(lastIndex) })
  }

  return (
    <div className={`flex border-b-2 border-b-white/10 py-6 ${isUser ? "justify-end" : "justify-start"} mb-2`}>
      <div
        className={`max-w-[90%] wrap-break-word whitespace-pre-wrap p-4 rounded-2xl text-sm sm:text-base  ${
          isUser
            ? "bg-linear-to-r from-[#549431] to-[#3a8d14] text-white mb-2"
            : "text-gray-200"
        }`}
      >
        {parts.map((part, i) =>
          part.type === "code" ? (
            <SyntaxHighlighter
              key={i}
              language={part.lang}
              style={vscDarkPlus}
              wrapLongLines
              customStyle={{ borderRadius: "0.5rem", margin: "0.5rem 0" }}
            >
              {part.content}
            </SyntaxHighlighter>
          ) : (
            <span key={i}>{part.content}</span>
          )
        )}
      </div>
    </div>
  )
}

export default MesssageBubble