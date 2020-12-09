import AuthButton from './AuthButton';
export default function Header(props) {
    return (
        <header className="header">
            <img src="" alt="Not My Final Forum" />
            <nav>selection navigation
            </nav>

            <AuthButton {...props} />
        </header>
    );
}
