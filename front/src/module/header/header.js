import AuthButton from './AuthButton';
import { Link } from 'react-router-dom';
export default function Header(props) {
    return (
        <header className="header">
            <Link to="/"><img src="" alt="Not My Final Forum" /></Link>

            <AuthButton {...props} />
        </header>
    );
}
