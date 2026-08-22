import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

/**
 * useRequireAuth — gate any action behind login.
 *
 * Usage:
 *   const requireAuth = useRequireAuth();
 *   <button onClick={() => requireAuth(() => placeBuyOrder(stock))}>Buy</button>
 *
 * If the user is logged in, `action()` runs immediately.
 * If not, they're sent to /login with the current page remembered,
 * so AuthPage can send them right back after a successful login.
 */
export function useRequireAuth() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return function requireAuth(action) {
    if (isAuthenticated) {
      action();
      return;
    }
    navigate("/login", { state: { from: location.pathname + location.search } });
  };
}
