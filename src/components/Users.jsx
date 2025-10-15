import { useState } from "react";

const mockData = [
    { username: 'Ola Normann', email: 'ola.normann@norge.no' },
    { username: 'Torleif', email: 'torleif@kodehode.no' },
    { username: 'Jan Egil', email: 'jan.egil@kodehode.no' },
    { username: 'Sander', email: 'sander@kodehode.no' },
];

function Users({ cookieCount }) {
    const [users, setUsers] = useState(mockData);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    const handleAddUser = () => {
        if (!username || !email) return alert("Fill out both feilds!");
        const newUser = { username, email, cookies: cookieCount };
        setUsers([...users,newUser]);
        setUsername('');
        setEmail('');
    };

    return (
        <div style={{ marginTop: "2rem"}}>
            <h2>Sign Up & User List</h2>
            <p>Total amount of cookies: {cookieCount}</p>

            <div style={{ marginBottom: "1rem" }}>
                <input 
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ marginRight: "0.5rem"}}
                />
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginRight: "0.5rem" }}
                />
                <button onClick={handleAddUser}
                    style={{
                    marginBottom:"1rem",
                    padding: "0.5rem 1rem",
                    cursor: "pointer",
                    borderRadius: "6px",
                    border: "1px solid #49331bff",
                    backgroundColor: "#dda66cff",
                    color: "#fff"
                    }}
                >Add user</button>
            </div>
            <ul style={{ listStyle: "none", padding: 0 }}>
            {[...users]
                .sort((a, b) => b.cookies - a.cookies)
                .map((user, index) => (
                    <li key={index}>
                        <strong>{user.username}</strong> — {user.email} — 🍪 {user.cookies} cookies
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Users;