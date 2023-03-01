const pow = (number, p) => {
    let result = number;
    while (p > 1) {
        result *= number;
        p -= 1;
    };
    return result;
};

