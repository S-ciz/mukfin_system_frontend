export default function MessageTicks({ status }) {
  if (status === 'read') {
    return (
      <svg className="w-4 h-4 text-blue-400 inline-block ml-1 shrink-0" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 9 5 13 12 4" />
        <polyline points="8 9 12 13 19 4" />
      </svg>
    )
  }

  if (status === 'delivered') {
    return (
      <svg className="w-4 h-4 text-gray-400 inline-block ml-1 shrink-0" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="2 9 6 13 14 4" />
      </svg>
    )
  }

  return null
}
