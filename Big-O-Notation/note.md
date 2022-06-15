**Notes**

To every problem, there's 10 or more different solutions to solving it. How do we know which is best?
That's the idea behind Big O Notation

- Intro to Big O Notation:
    - It's a way of generalizing codes and comparing code and its performance to other piece of code
    - It's not just about codes working but also their performance. There's always a best solution/algorithm suited to a problem at hand.
    - Also it;s important to have a precise vocabulary to talk about how our code performs
    - Also useful for discussing trade-offs between different approaches
    - Helps in identifying inefficient code points that slow down or crash processes

- Timing Our code
    - There can be two different codes that work to solve a particular problem, but which is better?
    - What does better even mean? Faster? Less memory intensive? more readable? brevity?
    - They are all valid measure and it really comes down to the situations. Though the first two are prioritized in most situations
    
    - The problem with Time:
        - The actual measurement of time is often unreliable
        - Different machines as well as the same machine can and will record different times
        - for fast Algorithms, speed measurements may not be precise enough
        - In general terms, there is a different measure better than time to measure the performances of codes. That's where Big O Notation comes in

- Counting Operations
    - Rather than counting milliseconds for codes to run which is so unstable and unreliable we can instead count the number of simple operations that a computer has to perform as that is constant.
    - The time for each operations may vary but the cumulative time will always be determined by the number of operations.
    - for example in the SecondAddUpTo() function in the code book, only three simple operations(multiplication, addition and division) are performed no matter how huge or small the number passed into it. Be it 10000000 or 3 that's passed into the function, only three simple operations are performed in each case.
    - compared to the FirstAddUpTo() function in the code book, it has few more simple operations to perform.
        - In the codeblock, there are a couple of simple operations to perform (addition, assignment, comparison and increment)
        - But the execution of the codeblock is dependent on the loop which in turn is dependent on how big the number.
        Therefore, if 5 is passed to the FirstAddUpTo() function, there's 5(n) times number of simple operations to get it done. if 100000 is passed, 100000(n) times number of simple operations will be carried out, which confers upon it more execution time.
        It therefore increases as (n) grows
    - Overall, counting these operations can be tricky but we do not necesarily have to do so for every solution. There is a way of generalizing it because regardless the number of operations grows roughly proportionally with n.
    - This is what Big O Notation focuses on, the big picture.

- Official intro to Big O Notation
    - Big O Notation is a way of formalize fuzy counting.
    - It allows us to talk formally aboout hor the runtime of an algorithm grows as the inputs grows
    - We often don't care abput the details, only the trends
    - We say that an algorithm is O(f(n)) ["Big O of f-event"] if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
    - f(n) could be linear (f(n) = n)
    - f(n) could be quadratic (f(n) = n^2)
    - f(n) could be constant (f(n) = 1)
    - f(n) could be something entirely different!
