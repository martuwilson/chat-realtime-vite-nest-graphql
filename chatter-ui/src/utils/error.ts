

const ExtractErrorMessage = (error: any): string => {
    const errorMessage = error?.graphQLErrors?.[0]?.extensions?.originalError?.message;

    if(!errorMessage) {
        return "";
    }

    if (Array.isArray(errorMessage)) {
        return formatError(errorMessage[0]);
    } else {
        return formatError(errorMessage);
    }
};

const formatError = (errorMessage: string) => {
    return errorMessage.charAt(0).toUpperCase() + errorMessage.slice(1);
}

export { ExtractErrorMessage };