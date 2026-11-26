import clsx from 'clsx'

const variants = {
  success: 'bg-green-100 text-green-800 border-green-400',
  error: 'bg-red-100 text-red-800 border-red-400',
  warning: 'bg-yellow-100 text-yellow-800 border-yellow-400',
}

function Alert({ variant = 'success', children }) {
  return (
    <div className={clsx('border-l-4 p-4 rounded', variants[variant])} role="alert">
      {children}
    </div>
  )
}

export default Alert