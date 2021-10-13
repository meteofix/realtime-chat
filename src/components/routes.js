import {CHAT_ROUTE, LOGIN_ROUTE, LOGIN_UI_ROUTE, REGISTER_ROUTE} from "../utils/consts";
import Login from "./Login";
import Chat from "./Chat";
import Register from "./Register";
import LoginWithFirebaseUi from "./LoginWithFirebaseUI";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: LOGIN_UI_ROUTE,
        Component: LoginWithFirebaseUi
    },
    {
        path: REGISTER_ROUTE,
        Component: Register
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]
