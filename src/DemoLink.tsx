import { KeyboardEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const DemoLink = ({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}) => {
    const navigate = useNavigate();

    const redirectToDemo = () => {
        navigate(`/demo${path}`);
    };

    const handleClick = () => {
        redirectToDemo();
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Enter') {
            redirectToDemo();
        }
    };

    return (
        <div
            className="py-4 px-6 border rounded-md shadow-md hover:cursor-pointer hover:bg-slate-500 hover:text-white transition"
            role="link"
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            <div className="text-lg font-semibold">{title}</div>
            <div className="pt-1 truncated">{description}</div>
        </div>
    );
};

export default DemoLink;
