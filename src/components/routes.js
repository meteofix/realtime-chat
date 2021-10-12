import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import Login from "./Login";
import Chat from "./Chat";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
]

export const privateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]
