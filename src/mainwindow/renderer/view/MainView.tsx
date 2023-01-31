import { FC, useEffect, useRef, useState } from "react";
import { MdAdd, MdDelete, MdEdit, MdFolder, MdFolderOpen, MdMenu, MdStorage } from "react-icons/md"

const MainView: FC = () => {

    const [state, setState] = useState<boolean>(true)

    return(
        <>
            <nav className="navigation">
                <button onClick={() => setState(!state)}>
                    <MdMenu />
                </button>

                <button className="nav-end">
                    <MdFolderOpen />
                </button>
            </nav>
            <div className={`main ${state ? "" : "sidebar-hidden"}`}>
                <aside>
                    <section>
                        <div>
                            Server
                        </div>
                        <button className="btn-add">
                            <MdAdd />
                        </button>
                    </section>

                    <ul>
                        <li>
                            <button>
                                <MdStorage />
                                Keycloak
                            </button>
                            <button className="btn-add">
                                <MdAdd />
                            </button>
                            <button>
                                <MdEdit />
                            </button>
                            <button className="btn-delete">
                                <MdDelete />
                            </button>
                        </li>
                        <li>
                            <button>
                                <MdStorage />
                                GitHub
                            </button>
                            <button className="btn-add">
                                <MdAdd />
                            </button>
                            <button>
                                <MdEdit />
                            </button>
                            <button className="btn-delete">
                                <MdDelete />
                            </button>
                        </li>
                    </ul>
                </aside>
                <main>
                    Content
                </main>
            </div>
        </>
    )
}

export default MainView