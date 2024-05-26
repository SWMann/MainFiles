



function D12AForm () {





    return (


        <div className="w-full max-w-3xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-900 text-white px-8 py-6">
                <h1 className="text-2xl font-bold">D-12A</h1>
                <p className="text-gray-300">Fill out the following form to apply for general entry into our
                    unit.</p>
            </div>
            <form className="px-8 py-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                               htmlFor="username">
                            Username
                        </label>
                        <input
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            id="username"
                            placeholder="Enter your username"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                               htmlFor="gamename">
                            Gamename
                        </label>
                        <input
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            id="gamename"
                            placeholder="Enter your gamename"
                            type="text"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            id="email"
                            placeholder="Enter your email"
                            type="email"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="dob">
                            Date of Birth
                        </label>
                        <input
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            id="dob"
                            type="date"
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        By filling out this form you are acknowledging that you have read and understood our rules and
                        have a good
                        understanding of what the unit does.
                    </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                               htmlFor="career-path">
                            Requested Career Path
                        </label>
                        <input
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            disabled
                            id="career-path"
                            placeholder="Officer"
                            type="text"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                               htmlFor="initial-mos">
                            Initial MOS
                        </label>
                        <select
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            id="initial-mos"
                        >
                            <option value="">Select initial MOS</option>
                            <option value="rifleman">Rifleman</option>
                            <option value="grenadier">Grenadier</option>
                            <option value="medic">Medic</option>
                            <option value="engineer">Engineer</option>
                        </select>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                               htmlFor="arma-experience">
                            Arma Experience Level
                        </label>
                        <select
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            id="arma-experience"
                        >
                            <option value="">Select Arma experience</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                               htmlFor="milsim-experience">
                            MILSIM Experience Level
                        </label>
                        <select
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            id="milsim-experience"
                        >
                            <option value="">Select MILSIM experience</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                           htmlFor="leadership-experience">
                        Leadership Experience
                        <span className="text-gray-500 dark:text-gray-400 ml-2 text-xs">
              (Any experience leading teams, groups, or organizations)
            </span>
                    </label>
                    <textarea
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        id="leadership-experience"
                        placeholder="Describe your leadership experience"
                    />
                </div>
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                           htmlFor="officer-info">
                        Information for Brigade HQ
                    </label>
                    <textarea
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        id="officer-info"
                        placeholder="Provide any additional information for Brigade HQ"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600"
                        type="submit"
                    >
                        Submit Application
                    </button>
                </div>
            </form>
        </div>


    )


}


export default D12AForm