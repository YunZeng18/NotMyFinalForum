import AuthButton from './AuthButton';
export default function Header(props) {
    return (
        <header className="header">
            <img src="" alt="Not My Final Forum" />
            <form >
                <input className="header__search" placeholder="Search..." maxLength="50" type="text" />
            </form>

            <AuthButton {...props} />
        </header>
    );
}
