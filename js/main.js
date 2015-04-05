function FYshuffle(A) {
    var n = A.length, i, j;
    while (n > 0) {
        i = Math.floor(Math.random() * n);
        n = n - 1;
        j = A[n];
        A[n] = A[i];
        A[i] = j;
    }
    return A;
}
questions = FYshuffle(questions)
questions = ['So what are you working on?'].concat(questions)
console.log(questions)