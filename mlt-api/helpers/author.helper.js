const AUTHOR_NAME = process.env.AUTHOR_NAME;
const AUTHOR_LASTNAME = process.env.AUTHOR_LASTNAME;

export const getAuthorInfo = () => {
    return {
        name: AUTHOR_NAME,
        lastname: AUTHOR_LASTNAME,
    };
};
