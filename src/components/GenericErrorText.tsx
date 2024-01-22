export default function GenericErrorText({ msg = "Error!" }) {
    return <div className="text-red-500 font-6 w-max">{msg}</div>
}