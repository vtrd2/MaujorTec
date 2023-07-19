import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <main className="principal">
            <h2>404!</h2>
            <p>
                Página não encontrada ou removida. <Link to="/">Ir pra Home Page</Link>
            </p>
        </main>
    )
}

export default NotFound
