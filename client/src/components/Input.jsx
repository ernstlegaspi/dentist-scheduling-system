export default function Input({ disabled, extraClass, name, onChange, placeholder, type = "text", value }) {
	return (
		<input
			className={`${extraClass ? extraClass : 'w-full'} outline-none py-2 px-1 border-b border-black2 mb-5`}
			disabled={disabled}
			name={name}
			onChange={onChange}
			placeholder={placeholder}
			type={type}
			value={value}
		/>
	)
}
