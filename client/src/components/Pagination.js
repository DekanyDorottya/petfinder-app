import React from 'react';

const Pagination = ({
    postsPerPage,
    totalPosts,
    setCurrentPage,
    currentPage,
}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const handlePrev = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < 10) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className='pagination'>
            <button className='prev' onClick={handlePrev}>
                Prev
            </button>
            {pageNumbers.map((page, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(page)}
                        className={page === currentPage ? 'active' : ''}
                    >
                        {page}
                    </button>
                );
            })}
            <button className='next' onClick={handleNext}>
                Next
            </button>
        </div>
    );
};

export default Pagination;