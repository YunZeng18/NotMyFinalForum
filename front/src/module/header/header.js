import AuthButton from './AuthButton';
export default function Header(props) {
    return (
        <header className="header">
            <img src="" alt="Not My Final Forum" />

            <AuthButton {...props} />
        </header>
    );
}
