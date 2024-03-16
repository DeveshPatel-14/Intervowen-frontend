
import AuthAdmin from "@/src/components/AuthAuthor"

export default function adminLayout({ children }) {

    return <AuthAdmin routesToSkip={{
        '/signin': true,
        '/signup': true,
        '/signout': true,
    }}>{children}</AuthAdmin>
}