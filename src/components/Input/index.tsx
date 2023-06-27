interface InputProps {
  value: any
  onChange?: (value: any) => void
  placeholder?: string
  type?: string
  label: string
  child?: any
  icon: any
  required?: boolean
}

function Input(props: InputProps) {
  return (
    <div className="flex">
      <div
        className={`${
          !props.child ? 'w-3/4' : 'w-[105%]'
        } flex place-items-center`}
      >
        <label className="text-xl text-white">{props.label}</label>
      </div>
      {props.child}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          {props.icon}
        </div>
        <input
          type={props.type || 'string'}
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder={props.placeholder}
          required={props.required}
          disabled={!props.onChange}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </div>
  )
}

export default Input
