import { HeaderAvatar } from "@/components/avatars/HeaderAvatar"

export const Header = ({children}) => {
    return (
        <header className="flex justify-between align-center h-14 w-full bg-gray-800 shadow-lg">
            {children}
            <HeaderAvatar/>
        </header>
    )
}