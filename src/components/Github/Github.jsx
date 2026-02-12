// import React from 'react';
import { Github as GithubIcon, Star, GitFork, Eye } from 'lucide-react';

function Github({ data }) {
    if (!data) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">Unable to load GitHub data.</p>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-gradient-to-b from-white via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 py-6 sm:py-10 md:py-14 lg:py-20 px-3 sm:px-4 md:px-6 lg:px-8'>
            <div className='mx-auto max-w-6xl'>
                {/* Header Section */}
                <div className='flex flex-col items-center md:flex-row md:items-start gap-4 sm:gap-6 md:gap-8 lg:gap-12 mb-10 sm:mb-14 md:mb-16 lg:mb-20'>
                    {/* Profile Card */}
                    <div className='flex-shrink-0 w-full sm:w-auto flex justify-center md:justify-start'>
                        <img 
                            src={data.avatar_url} 
                            alt="GitHub Avatar" 
                            className='w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border-3 sm:border-4 border-purple-500 shadow-lg hover:shadow-purple-500/50 transition-shadow'
                        />
                    </div>

                    {/* Profile Info */}
                    <div className='flex-1 w-full text-center md:text-left'>
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-2 sm:mb-3 line-clamp-2'>
                            {data.name || data.login}
                        </h1>
                        <p className='text-gray-700 dark:text-gray-400 text-xs sm:text-sm md:text-base mb-3 sm:mb-4 line-clamp-2'>{data.bio}</p>
                        
                        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-3 lg:gap-4 mb-4 sm:mb-6 md:mb-8'>
                            <div className='bg-orange-100 dark:bg-purple-900/50 backdrop-blur rounded-lg p-2 sm:p-3 md:p-4 border border-orange-200 dark:border-purple-700/30'>
                                <div className='text-orange-600 dark:text-orange-400 font-bold text-base sm:text-lg md:text-xl'>{data.public_repos}</div>
                                <div className='text-orange-700 dark:text-gray-400 text-xs sm:text-xs md:text-sm'>Repos</div>
                            </div>
                            <div className='bg-blue-100 dark:bg-purple-900/50 backdrop-blur rounded-lg p-2 sm:p-3 md:p-4 border border-blue-200 dark:border-purple-700/30'>
                                <div className='text-blue-600 dark:text-blue-400 font-bold text-base sm:text-lg md:text-xl'>{data.followers}</div>
                                <div className='text-blue-700 dark:text-gray-400 text-xs sm:text-xs md:text-sm'>Followers</div>
                            </div>
                            <div className='bg-pink-100 dark:bg-purple-900/50 backdrop-blur rounded-lg p-2 sm:p-3 md:p-4 border border-pink-200 dark:border-purple-700/30'>
                                <div className='text-pink-600 dark:text-pink-400 font-bold text-base sm:text-lg md:text-xl'>{data.following}</div>
                                <div className='text-pink-700 dark:text-gray-400 text-xs sm:text-xs md:text-sm'>Following</div>
                            </div>
                            <div className='bg-cyan-100 dark:bg-purple-900/50 backdrop-blur rounded-lg p-2 sm:p-3 md:p-4 border border-cyan-200 dark:border-purple-700/30'>
                                <div className='text-cyan-600 dark:text-cyan-400 font-bold text-base sm:text-lg md:text-xl'>{data.public_gists}</div>
                                <div className='text-cyan-700 dark:text-gray-400 text-xs sm:text-xs md:text-sm'>Gists</div>
                            </div>
                        </div>

                        <a 
                            href={data.html_url} 
                            target="_blank" 
                            rel="noreferrer"
                            className='inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-400 hover:to-pink-400 text-white font-bold py-2 sm:py-2 md:py-3 px-4 sm:px-5 md:px-6 rounded-lg text-xs sm:text-sm md:text-base transition-all transform hover:scale-105'
                        >
                            <GithubIcon size={18} className='sm:w-5 sm:h-5' /> Visit GitHub
                        </a>
                    </div>
                </div>

                {/* Repositories Section */}
                <div>
                    <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text mb-6 sm:mb-8 md:mb-10 flex items-center gap-2 sm:gap-3'>
                        <GithubIcon size={24} className='sm:w-8 sm:h-8 md:w-10 md:h-10 text-cyan-400' /> 
                        Repositories ({data.repos?.length || 0})
                    </h2>

                    {/* Repositories Grid */}
                    {data.repos && data.repos.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6'>
                            {data.repos.map((repo) => (
                                <a
                                    key={repo.id}
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className='group bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-900 border border-gray-200 dark:border-purple-700/30 hover:border-orange-300 dark:hover:border-purple-500 rounded-lg p-3 sm:p-4 md:p-5 transition-all duration-300 transform hover:scale-102 hover:shadow-lg hover:shadow-orange-500/20 dark:hover:shadow-purple-500/30'
                                >
                                    {/* Repo Header */}
                                    <div className='flex items-start justify-between mb-2 sm:mb-3'>
                                        <h3 className='text-sm sm:text-base md:text-lg font-bold text-orange-600 dark:text-orange-400 group-hover:text-orange-500 dark:group-hover:text-orange-300 transition-colors line-clamp-2 flex-1'>
                                            {repo.name}
                                        </h3>
                                        <GithubIcon size={20} className='sm:w-6 sm:h-6 text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400 flex-shrink-0 ml-1' />
                                    </div>

                                    {/* Description */}
                                    <p className='text-gray-700 dark:text-gray-400 text-xs sm:text-xs md:text-sm mb-3 line-clamp-2'>
                                        {repo.description || 'No description available'}
                                    </p>

                                    {/* Language Badge */}
                                    {repo.language && (
                                        <div className='mb-3'>
                                            <span className='inline-block bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-xs px-2 sm:px-2.5 py-1 rounded-full border border-purple-200 dark:border-purple-700/30'>
                                                {repo.language}
                                            </span>
                                        </div>
                                    )}

                                    {/* Stats */}
                                    <div className='flex flex-wrap gap-2 sm:gap-3 pt-3 border-t border-gray-300 dark:border-gray-700/50'>
                                        <div className='flex items-center gap-1 text-yellow-600 dark:text-yellow-400 text-xs'>
                                            <Star size={14} />
                                            <span>{repo.stargazers_count}</span>
                                        </div>
                                        <div className='flex items-center gap-1 text-blue-600 dark:text-blue-400 text-xs'>
                                            <GitFork size={14} />
                                            <span>{repo.forks_count}</span>
                                        </div>
                                        <div className='flex items-center gap-1 text-green-600 dark:text-green-400 text-xs'>
                                            <Eye size={14} />
                                            <span>{repo.watchers_count}</span>
                                        </div>
                                        {repo.open_issues_count > 0 && (
                                            <div className='ml-auto text-pink-600 dark:text-pink-400 text-xs'>
                                                {repo.open_issues_count} issues
                                            </div>
                                        )}
                                    </div>
                                </a>
                            ))}
                        </div>
                    ) : (
                        <div className='text-center py-8 sm:py-12 md:py-16'>
                            <p className='text-gray-400 text-base sm:text-lg'>No repositories found</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Github;

// Loader function to fetch GitHub data and repositories
export const githubInfoLoader = async () => {
    try {
        // Fetch user profile data
        const userResponse = await fetch('https://api.github.com/users/Muhammadyousaf54');
        
        if (!userResponse.ok) {
            throw new Error("Failed to fetch user data");
        }
        
        const userData = await userResponse.json();

        // Fetch repositories
        const reposResponse = await fetch('https://api.github.com/users/Muhammadyousaf54/repos?sort=stars&order=desc&per_page=100');
        
        if (!reposResponse.ok) {
            throw new Error("Failed to fetch repositories");
        }
        
        const reposData = await reposResponse.json();

        return {
            ...userData,
            repos: reposData
        };
    } catch (error) {
        console.error('GitHub API Error:', error);
        throw new Error("Failed to fetch GitHub data");
    }
};
