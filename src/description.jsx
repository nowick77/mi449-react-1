import {useState} from "react";

export default function TogglableDescription({description}) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <button onClick={()=>setOpen(!open)}>{open ? "Collapse" : "Expand"}</button>
            {open && <p>{description}</p>}
        </div>
    )
}