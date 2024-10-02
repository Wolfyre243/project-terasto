// This file contains ui for the login components.

// Create a standardised format for easier editing
const loginInputClassName = "w-full p-2 rounded-3xl bg-neutral-700";

export function LoginForm() {

    // Add backend here next time

    return (
        <div className="w-full h-fit bg-zinc-900 p-5  rounded-2xl">
            <form action="" className="flex flex-col items-center gap-y-5">
                <input type="text" placeholder="Username" className={loginInputClassName}/>
                <input type="text" placeholder="Password" className={loginInputClassName}/>
                <button type="submit" className="w-fit px-16 py-1 rounded-lg bg-emerald-600">Login</button>
            </form>

        </div>
    );
}