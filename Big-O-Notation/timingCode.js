function firstAddUpTo(n) {
    let total = 0
    for (let i=0;  i <= n; i++) {
        total = total + i
    }
    return total;
}

function secondAddUpTo(n) {
    return n * (n + 1) / 2;
}

console.log(secondAddUpTo(5))