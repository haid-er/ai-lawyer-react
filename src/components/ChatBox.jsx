const ChatBox = () => {
    return (
        <div className="flex-1 p-4 bg-gray-100">
            <div className="bg-white shadow-md p-4 mb-4">
                <p className="text-lg font-semibold">Create a puzzle for me to solve</p>
            </div>
            <div className="bg-white shadow-md p-4 mb-4">
                <p className="text-lg font-semibold">Which came first: the chicken or the egg?</p>
            </div>
            <div className="bg-white shadow-md p-4 mb-4">
                <p className="text-lg font-semibold">Is a hot dog a sandwich?</p>
            </div>
            <div className="bg-white shadow-md p-4 mb-4">
                <p className="text-lg font-semibold">How many Rs are in "strawberry"?</p>
            </div>
        </div>
    );
};

export default ChatBox;
