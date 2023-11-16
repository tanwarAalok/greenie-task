
const UserDetailsPopup = ({ user, onClose, onGenerateReport }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-4">User Details</h2>
                <p>
                    <span className="font-semibold">Username:</span> {user.username}
                </p>
                <p>
                    <span className="font-semibold">Email:</span> {user.email}
                </p>
                <p>
                    <span className="font-semibold">Phone:</span> {user.phone}
                </p>
                <p>
                    <span className="font-semibold">ID:</span> {user.id}
                </p>
                <p>
                    <span className="font-semibold">Creation Date:</span> {user.creationDate}
                </p>
                <div className="mt-4 flex space-x-4">
                    <button
                        onClick={onGenerateReport}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Generate Report
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsPopup;
