function ShowPrimes(n) {
    var prime = [];
        for (let i = 2; i <= n; i++) {
            if (!isPrime(i)) continue;
            prime.push(i);
    }
    return prime;

    }
    
    function isPrime(n) {
        for (let i = 2; i < n; i++) {
            if ( n % i == 0) return false;
        }
        return true;
    }

    while (true) {
        var num = prompt("Enter a positive integer");
        if (num <= 0) {} 
        else if (num % 1 !== 0) {}
        else if (isNaN(parseInt(num))){}

        else {
            isPrime(num)
            var Primes = ShowPrimes(num)
            alert('For n = ' + num + ' the prime numbers are ' + Primes)
            break;
        }
    }
    