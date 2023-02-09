import { FC, PropsWithChildren } from "react";
import { createPortal } from "react-dom";

interface DialogProps {
    title?: string

    open: boolean,

    onSubmit: () => void,
    onAbort: () => void
}

const Dialog: FC<PropsWithChildren<DialogProps>> = ({children, title, onAbort, open}) => {

    const handleAbort = () => {
        onAbort()
        console.log("Abort")
    } 

    return createPortal(<div className={`dialog-container ${open ? "open" : "closed" }`}>
        <div className="background" onClick={handleAbort}>
            
        </div>
        <div className="dialog">
            <section>
                <h2>{ title || "" }</h2>
            </section>
            <section>
                { children }
            </section>
            <section>
                <button className="btn-secondary" onClick={handleAbort}>Abbrechen</button>
                <button className="btn-primary">Speichern</button>
            </section>
        </div>
    </div>, document.body)
}

export default Dialog