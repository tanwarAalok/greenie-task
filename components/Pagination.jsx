const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <div className="flex justify-center items-center space-x-2 mt-2">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-3 py-2 border ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'}`}
            >
                Prev
            </button>
            <div className="flex space-x-2">
                <span className="px-3 py-2 border bg-white">{currentPage}</span>
            </div>
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-3 py-2 border ${currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-white'}`}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
