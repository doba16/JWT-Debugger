import { FC, useEffect, useState } from "react";
import { MdAdd, MdDelete, MdEdit, MdStorage } from "react-icons/md";
import { AuthorizationServer } from "../../../common/types/authorization-server";
import { setServer, addServer } from "../store/authorization-servers-slice";
import { RootState, useAppDispatch, useAppSelector } from "../store/hooks";
import { v4 as uuidv4 } from 'uuid';
import { navigateToServer } from "../store/navigation-slice";
import Dialog from "./Dialog";

const Sidebar: FC = () => {

    const {servers} = useAppSelector((store: RootState) => store.servers)

    const dispatch = useAppDispatch()

    const [open, setOpen] = useState(false)

    const handleAddServer = () => {
        /*dispatch(addServer({
            serverToAdd: {
                id: uuidv4(),
                name: "Testserver",
                authorizationUrl: "http://localhost/foo", // FIXME falscher Name
                tokenUrl: "http://localhost/bar"
            }
        }))*/
        setOpen(true)
    }

    const selectServer = (id: string) => {
        dispatch(navigateToServer({
            serverId: id
        }))
    }

    return (
        <>
            <aside>
                <section>
                    <div>
                        Server
                    </div>
                    <button className="btn-add" onClick={handleAddServer}>
                        <MdAdd />
                    </button>
                </section>

                <ul>
                    {servers?.map((s: AuthorizationServer) => (
                        <li key={s.id}>
                            <button>
                                <MdStorage />
                                {s.name}
                            </button>
                            <button className="btn-add">
                                <MdAdd />
                            </button>
                            <button onClick={() => selectServer(s.id)}>
                                <MdEdit />
                            </button>
                            <button className="btn-delete">
                                <MdDelete />
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
            <Dialog title="Server hinzufügen" open={open} onSubmit={() => {setOpen(false)}} onAbort={() => {setOpen(false); console.log("Abort, die zweite")}}>
                <form>
                    <fieldset>
                        <legend>Name</legend>

                        <label htmlFor="serverName">Name des Servers</label>
                        <input type={"text"} id="serverName" />
                    </fieldset>

                    <fieldset>
                        <legend>Initialisierung</legend>

                        <label htmlFor="loadConfig">Konfiguration laden</label>
                        <input type="checkbox" id="loadConfig"/>

                        <label htmlFor="wellKnownUrl">URL zur Konfiguration</label>
                        <input id="wellKnownUrl" type={"text"} />
                        <p>Hier kann der Pfad zur <code>.well-known/openid-configuration</code> des Authorizations-Servers angegeben werden.</p>
                    </fieldset>
                </form>
            </Dialog>
        </>
    )
}

export default Sidebar