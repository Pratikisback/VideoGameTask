import React from 'react';
import Container from '../common/Container';

const Contact = () => {
    return (
        <Container>
            <div className="flex flex-col items-center justify-center h-[85vh] px-4 text-white">
                <div className="w-full max-w-3xl mb-8">
                    <h1 className="mb-4 mt-2 text-3xl font-bold text-center sm:text-4xl sm:text-left">GET IN TOUCH</h1>
                    <p className="mb-8 text-base text-center sm:text-lg sm:text-start">
                        Trysail transom furl Sea Legs scallywag Jack Ketch chandler mizzenmast reef sails skysail.
                        Shiver me timbers loot bucko belaying pin Sea Legs boom gunwalls booty jury mast fore.
                    </p>
                </div>
                <div className="w-full max-w-3xl p-6 sm:p-8 bg-[#0e1a2b] rounded shadow-md">
                    <h2 className="mb-4 text-xl font-bold sm:text-2xl">Contact Form</h2>
                    <form>
                        <div className="flex flex-col gap-4 mb-4 sm:flex-row">
                            <div className="flex-1">
                                <label className="block mb-2 text-sm sm:text-base" htmlFor="name">Name <span className='text-[#5692e8]'>*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full p-2 bg-[#182c47] border border-gray-600 rounded"
                                    required
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-2 text-sm sm:text-base" htmlFor="email">Email Address <span className='text-[#5692e8]'>*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 bg-[#182c47] border border-gray-600 rounded"
                                    required
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 text-sm sm:text-base" htmlFor="message">Message <span className='text-[#5692e8]'>*</span></label>
                            <textarea
                                id="message"
                                className="w-full p-2 bg-[#182c47] border border-gray-600 rounded"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit" className="w-full p-2 bg-blue-600 rounded sm:max-w-xs hover:bg-blue-500">
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default Contact;
