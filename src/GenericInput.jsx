export default function GenericInput({ type = "text", placeholder = "Input text here" }) {
    return <input className="border border-black w-64 mb-6 px-2" type={type} placeholder={placeholder} />
}