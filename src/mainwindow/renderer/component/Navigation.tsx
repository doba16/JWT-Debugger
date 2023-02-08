import { FC } from "react";
import { MdFolderOpen, MdMenu } from "react-icons/md";

interface NavigationProps {
    sidebarOpen: boolean,
    setSidebarOpen: (open: boolean) => void
}

const Navigation: FC<NavigationProps> = ({sidebarOpen, setSidebarOpen}) => {
    return (
        <nav className="navigation">
                <button onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <MdMenu />
                </button>

                <button className="nav-end">
                    <MdFolderOpen />
                </button>
            </nav>
    )
}

export default Navigation