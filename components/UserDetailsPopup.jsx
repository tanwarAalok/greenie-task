import { getFormattedDate } from "@/utils/helper";

const UserDetailsPopup = ({ user, onClose, onGenerateReport }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white p-8 rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    User Details
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Username:</span> {user.username}
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Email:</span> {user.email}
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Phone:</span> {user.phone}
                        </p>
                    </div>
                    <div className="mb-4">
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">ID:</span> {user.id}
                        </p>
                    </div>
                    <div className="col-span-2 mb-4">
                        <p className="text-sm text-gray-600">
                            <span className="font-semibold">Creation Date:</span>{" "}
                            {getFormattedDate(user.creationDate)}
                        </p>
                    </div>
                </div>
                <div className="mt-8 flex justify-center space-x-4">
                    <button
                        onClick={onGenerateReport}
                        className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-300"
                    >
                        Generate Report
                    </button>
                    <button
                        onClick={onClose}
                        className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:border-gray-300"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDetailsPopup;
