
import AuthAdmin from "@/src/components/AuthReviewer"

export default function adminLayout({ children }) {

    return <AuthAdmin routesToSkip={{
        '/signin': true,
        '/signup': true,
        '/signout': true,
    }}>{children}</AuthAdmin>
}