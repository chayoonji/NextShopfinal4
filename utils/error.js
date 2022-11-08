const getError = (err) => {
  err.response && err.response.data && err.response.data.message
    ? err.response.data.message
    : err.message;
};

export { getError };

//?는 if than else 함수이다
