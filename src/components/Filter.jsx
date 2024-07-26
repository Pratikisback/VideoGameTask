import React from 'react';

const Filter = ({ filters, updateFilters }) => {
    const handleChange = (e) => {
        const { name, value } = e.target;
        updateFilters({
            ...filters,
            [name]: value,
        });
    };

    const handleClear = () => {
        updateFilters({
            name: '',
            minScore: '',
            orderBy: 'releaseDate',
        });
    };

    return (
        <div className="lg:w-1/4 w-full h-full md:mr-4 p-4 bg-[#0e1d30] flex flex-col">
            <h2 className="mb-4 text-xl">Filter Results</h2>
            <div className="flex flex-col flex-grow">
                <div className="mb-4">
                    <label className="block mb-2">Name (contains)</label>
                    <input
                        type="text"
                        name="name"
                        value={filters.name}
                        onChange={handleChange}
                        className="w-full p-2 bg-[#182c47] border border-gray-600 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Minimum Score</label>
                    <input
                        type="number"
                        name="minScore"
                        value={filters.minScore}
                        onChange={handleChange}
                        className="w-full p-2 bg-[#182c47] border border-gray-600 rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Order By</label>
                    <select
                        name="orderBy"
                        value={filters.orderBy}
                        onChange={handleChange}
                        className="w-full p-2 bg-[#182c47] border border-gray-600 rounded"
                    >
                        <option value="releaseDate" className={`py-2 p-4`}>Release Date</option>
                        <option value="score" className={`py-2 p-4`}>Score</option>
                        <option value="name" className={`py-2 p-4`}>Name</option>
                    </select>
                </div>
                <div className="flex-grow"></div>
            </div>
            <button
                onClick={handleClear}
                className="bg-[#5692e8] px-6 py-2 rounded hover:bg-blue-500 mt-4 self-end"
            >
                Clear
            </button>
        </div>
    );
};

export default Filter;
