import { ArrowBigLeftIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const BackArrow = () => {
    const location = useLocation(); // Get the current path location

    // Only render the back arrow if we are on the /swap route
    if (location.pathname !== '/swap') {
        return null; // Don't render the arrow if we are not on /swap
    }

    return (
        <Link to={'/'}>
            <ArrowBigLeftIcon />
        </Link>
    );
};

export default BackArrow;