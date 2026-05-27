import { ModeToggle } from "./mode-toggle"
import { SidebarTrigger } from "./ui/sidebar"
import { Separator } from "./ui/separator"
import { useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation()

    const getTitle = () => {
        switch (location.pathname) {
            case "/password-generator":
                return "Password Generator"
            case "/guess-word":
                return "Guess the Word"
            default:
                return "Dashboard"
        }
    }

    return (
        <div className="flex h-14 w-full shrink-0 items-center justify-between border-b px-4">
            <div className="flex items-center gap-2">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                <span className="text-sm font-medium text-muted-foreground">{getTitle()}</span>
            </div>
            <ModeToggle />
        </div>
    )
}

export default Navbar