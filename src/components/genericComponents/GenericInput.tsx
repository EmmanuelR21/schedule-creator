const GenericInput: React.FC<{ type?: string; placeholder?: string }> = ({ type = "text", placeholder = "Input text here" }) => {
    return <input className="border border-black w-64 mb-6 px-2" type={type} placeholder={placeholder} />
}

export default GenericInput;
