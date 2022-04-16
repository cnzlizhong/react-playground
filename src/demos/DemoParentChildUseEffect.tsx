import { useEffect, useState } from 'react';
import CanReturnHome from '../ReturnHomeHOC';

const Child = ({ count }: { count: number }) => {
    useEffect(() => {
        console.log('[Child useEffect]', 'Child mounted');
        return () => {
            console.log('[Child useEffect]', 'Child unmounted');
        };
    }, []);

    useEffect(() => {
        console.log('[Child useEffect]', 'Child state changed');
    }, [count]);

    console.log('Rendering child');

    return (
        <div>
            <div>Child</div>
            <div>Count: {count}</div>
        </div>
    );
};

const DemoParentChildUseEffect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('[Parent useEffect]', 'Parent mounted');
        return () => {
            console.log('[Parent useEffect]', 'Parent unmounted');
        };
    }, []);

    useEffect(() => {
        console.log('[Parent useEffect]', 'Parent state changed');
    }, [count]);

    const handleClick = () => {
        setCount((state) => state + 1);
    };

    console.log('Rendering parent');
    return (
        <div className="p-6">
            <header>Parent Child UseEffect Demo</header>
            <div>Parent</div>
            <button type="button" className="btnPrimary" onClick={handleClick}>
                Increase count
            </button>
            <Child count={count} />
        </div>
    );
};

export default CanReturnHome(DemoParentChildUseEffect);
