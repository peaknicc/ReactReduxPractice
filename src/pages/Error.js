import { Link } from "react-router-dom";

function Error() {
    return (
        <div>
            <h1>에러요!(404)</h1>
            <Link to={'/'}>
                <span>메인으로~~</span>
            </Link>
        </div>
    );
}

export default Error;