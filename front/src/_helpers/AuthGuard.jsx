import { Navigate } from "react-router-dom";
import { accountService } from "@services/account.service"

/**
 * Fonction de vérification de token
 * Et fermetur partie admin
 * 
 * @param {Object} props{children} 
 * @returns {ReactNode}
 */

function AuthGuard ({children}) {

    if(!accountService.isLogged()) {

        return <Navigate to="/auth/login"/>

    }
   
    return children

}

export default AuthGuard