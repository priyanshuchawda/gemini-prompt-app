
export const handleError = (error) => {
    if (error.response) {
      // Server responded with a status other than 200
      return `Error: ${error.response.data.message || 'An unexpected error occurred.'}`;
    } else if (error.request) {
      // Request was made but no response was received
      return 'Error: No response from the server. Please check your internet connection.';
    } else {
      // Something happened in setting up the request
      return `Error: ${error.message}`;
    }
  };