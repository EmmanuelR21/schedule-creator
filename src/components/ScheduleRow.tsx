import { useState } from "react"
import MassContainer from "./MassContainer"

const ScheduleRow: React.FC<{ date: string }> = ({ date }): JSX.Element => {
    const [isBilingual, setIsBilingual] = useState<boolean>(false)

    return (
        <>
            <div className="border-l border-y border-black p-2">
                {date}
                <select className="w-4 bg-white">
                    <option value="Non-Bilingual" onClick={() => setIsBilingual(false)}>Non-Bilingual</option>
                    <option value="Bilingual" onClick={() => setIsBilingual(true)}>Bilingual</option>
                </select>
            </div>
            <MassContainer isBilingual={isBilingual} />
        </>
    )
}

export default ScheduleRow;
