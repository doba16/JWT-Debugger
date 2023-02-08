import { FC, useEffect } from "react";
import { MdAdd, MdDelete, MdEdit, MdStorage } from "react-icons/md";
import { AuthorizationServer } from "../../../common/types/authorization-server";
import { setServer, addServer } from "../store/authorization-servers-slice";
import { RootState, useAppDispatch, useAppSelector } from "../store/hooks";
import { v4 as uuidv4 } from 'uuid';
import { navigateToServer } from "../store/navigation-slice";

const Sidebar: FC = () => {

    const {servers} = useAppSelector((store: RootState) => store.servers)

    const dispatch = useAppDispatch()

    const handleAddServer = () => {
        dispatch(addServer({
            serverToAdd: {
                id: uuidv4(),
                name: "Testserver",
                authorizationUrl: "http://localhost/foo", // FIXME falscher Name
                tokenUrl: "http://localhost/bar"
            }
        }))
    }

    const selectServer = (id: string) => {
        dispatch(navigateToServer({
            serverId: id
        }))
    }

    return (
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
    )
}

export default Sidebar