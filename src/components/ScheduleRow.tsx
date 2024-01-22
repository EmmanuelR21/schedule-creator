import { useState } from "react"
import MassContainer from "./MassContainer"

export default function ScheduleRow({ date }) {
    const [isBilingual, setIsBilingual] = useState(false)

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