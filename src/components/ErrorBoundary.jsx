import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log error to console in development
        console.error('Error caught by boundary:', error, errorInfo);
        
        // You can also log to an error reporting service here
        // logErrorToService(error, errorInfo);
        
        this.setState({
            error: error,
            errorInfo: errorInfo
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className='min-h-screen bg-gray-900 flex items-center justify-center px-4'>
                    <div className='max-w-2xl w-full text-center'>
                        <div className='bg-gray-800/80 backdrop-blur-sm rounded-2xl border border-red-500/20 p-8 md:p-12'>
                            <div className='mb-6'>
                                <svg 
                                    className='w-20 h-20 mx-auto text-red-400'
                                    fill='none' 
                                    viewBox='0 0 24 24' 
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path 
                                        strokeLinecap='round' 
                                        strokeLinejoin='round' 
                                        strokeWidth={2} 
                                        d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' 
                                    />
                                </svg>
                            </div>
                            
                            <h1 className='text-2xl md:text-3xl font-bold text-white mb-4'>
                                Something went wrong
                            </h1>
                            
                            <p className='text-gray-300 mb-8'>
                                We apologise for the inconvenience. An unexpected error has occurred.
                            </p>
                            
                            {process.env.NODE_ENV === 'development' && this.state.error && (
                                <details className='mt-6 text-left bg-gray-900/50 p-4 rounded-lg border border-white/5'>
                                    <summary className='text-yellow-200 cursor-pointer font-semibold mb-2'>
                                        Error Details (Development Only)
                                    </summary>
                                    <pre className='text-xs text-red-300 overflow-auto whitespace-pre-wrap'>
                                        {this.state.error.toString()}
                                        {this.state.errorInfo && this.state.errorInfo.componentStack}
                                    </pre>
                                </details>
                            )}
                            
                            <div className='flex flex-col sm:flex-row gap-4 justify-center mt-8'>
                                <button
                                    onClick={() => window.location.reload()}
                                    className='bg-yellow-200 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-200'
                                >
                                    Reload Page
                                </button>
                                
                                <a
                                    href='/'
                                    className='border border-yellow-200 text-yellow-200 px-8 py-3 rounded-full font-semibold hover:bg-yellow-200 hover:text-black transition-colors duration-200'
                                >
                                    Go Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
