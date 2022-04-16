import DemoLink from './DemoLink';

const Home = () => {
    return (
        <div className="h-full flex flex-col p-6">
            <header className="text-4xl text-center pb-8">React Playground</header>
            <div className="text-lg font-semibold">Demos</div>
            <div className="grid grid-cols-4 gap-4 mt-4">
                <DemoLink
                    title="Parent child useEffect order"
                    description="Find out in what order the useEffect runs in parent and child"
                    path="/parent-child-useEffect"
                />
            </div>
        </div>
    );
};

export default Home;
