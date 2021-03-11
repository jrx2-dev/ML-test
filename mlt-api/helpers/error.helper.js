export const createError = (res, error) => {
    const errorMessage = 'Server error. Did you send the necessary parameters?';
    const errorResponse = {
        error: error?.response?.data?.message || errorMessage,
    }
    res.status(500).json(errorResponse);
};
