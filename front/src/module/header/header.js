import AuthButton from './AuthButton';
export default function Header(props) {
    return (
        <header>
            <img src="" alt="Not My Final Forum" />
            <nav>forum links etc
            </nav>
            <AuthButton {...props} />
        </header>
    );
}
