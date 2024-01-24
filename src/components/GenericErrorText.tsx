const GenericErrorText: React.FC<{ msg?: string }> = ({ msg = "Error!" }): JSX.Element => {
    return <div className="text-red-500 font-6 w-max">{msg}</div>
}

export default GenericErrorText;
