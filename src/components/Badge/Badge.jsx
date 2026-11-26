import clsx from 'clsx'

const colors = {
  blue: 'bg-blue-100 text-blue-800',
  green: 'bg-green-100 text-green-800',
  red: 'bg-red-100 text-red-800',
  yellow: 'bg-yellow-100 text-yellow-800',
}

function Badge({ cor = 'blue', children }) {
  return (
    <span className={clsx('px-2.5 py-0.5 rounded-full text-xs font-semibold', colors[cor])}>
      {children}
    </span>
  )
}

export default Badge