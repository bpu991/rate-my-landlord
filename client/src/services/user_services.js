export const userService = {
    login,
    register,
};

async function login(email, password, csrf) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrf,
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
    };
    const response = await fetch(`/api/session/login`, requestOptions);

    if (response.ok) {
        const user = await response.json();
        return user.current_user || {};
    }
    const error = await response.json();
    return { error }

}

async function register(new_user, csrf) {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "X-CSRFToken": csrf,
        },
        body: JSON.stringify(new_user),
    };

    const response = await fetch(`/api/session/signup`, requestOptions);

    const user = await response.json();

    return user.current_user || {};
}
