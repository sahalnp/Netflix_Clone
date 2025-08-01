import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
export const goSignup = useCallback(() => {
    navigate("/signup");
}, [navigate]);
export const check = useCallback(
    (email, password, name) => {
        const user = getDetails(email);

        if (!user) {
            alert("You don't have account,Please sign up");
            goSignup();
            return false;
        }

        if (user.email !== email) {
            alert("Email not found");
            return false;
        }

        if (user.name !== name) {
            alert("Incorrect name");
            return false;
        }

        if (user.pass !== password) {
            alert("Incorrect password");
            return false;
        }

        setUser(user);
        return true;
    },
    [goSignup]
);
