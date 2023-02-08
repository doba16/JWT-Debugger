import { stat } from "original-fs";
import { FC, useEffect, useRef, useState } from "react";
import { MdAdd, MdDelete, MdEdit, MdFolder, MdFolderOpen, MdMenu, MdStorage } from "react-icons/md"
import Navigation from "../component/Navigation";
import Sidebar from "../component/Sidebar";
import { setServer } from "../store/authorization-servers-slice";
import { RootState, useAppDispatch, useAppSelector } from "../store/hooks";
import EditServerView from "./EditServerView";

const MainView: FC = () => {

    const [sidebarOpen, setSidebarOpen] = useState<boolean>(true)

    const {selectedResource, selectedResourceType} = useAppSelector((state: RootState) => state.navigation)

    return(
        <>
            <Navigation sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            <div className={`main ${sidebarOpen ? "" : "sidebar-hidden"}`}>
                <Sidebar />
                <main>
                    {
                        selectedResourceType === "server" && <EditServerView serverId={selectedResource} />
                    }
                </main>
            </div>
        </>
    )
}

export default MainView