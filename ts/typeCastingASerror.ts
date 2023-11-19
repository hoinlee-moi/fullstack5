try {
    // throw new Error('some error!!!!');   // 가
    throw 'some string error!!!';        // 나
    // throw ['some', 'array', 'error'];       // 다
} catch (error) {
    if (error !== null && typeof error === 'object' && 'message' in error) console.log(error.message)
    else JSON.stringify(error)
}
