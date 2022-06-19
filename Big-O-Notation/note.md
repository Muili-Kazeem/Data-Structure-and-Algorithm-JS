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
    - Big O Notation is a way of formalizing fuzy counting.
    - It allows us to talk formally aboout hor the runtime of an algorithm grows as the inputs grows
    - We often don't care abput the details, only the trends
    - We say that an algorithm is O(f(n)) ["Big O of f-event"] if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases
        - f(n) could be linear (f(n) = n)
        - f(n) could be quadratic (f(n) = n^2)
        - f(n) could be constant (f(n) = 1)
        - f(n) could be something entirely different!
    - therefore if we have O(1) ['Big O of 1'], this means as n grows, it's not reflected in the runtime and its number of execution/operation is constant
    - Also if we have O(n) ['Big O of n'], this means as n grows, the number of operations is roughly directly proportional to the size of n
    - Also, if we have O(n * n) = O(n^2), this means as n grows, the number of operations is roughly square of the size of n (and this happens in situations where we have a loop inside a loop)
    - Big O is just a generalized way of talking about how efficient an algorithm is as an input grows as it reflects in the runtime

- Simplifying Big O Expressions
    - Counting the different operations can get tricky and it doesn't really matter the exact count. All that we care about is really the general trend. Say a solution has a operation counts of 5n + 2, we can simplify the Big O to be just n. Regardless of the co-efficient and number of extras operations, the number of operations grows roughly proportionally with n. The trend is proportional with n
    - When determining the time complexity of an algorithm, there are some helpful rule of thumbs for Big O expressions.
    - These rules of thumb are consequences of the definition of big O notation.
        1. Constants don't matter.      O(2n) get simplified down to O(n) same as O(500) will get simplified down to O(1). O(13n^2 + 31) will simplify down to O(n^2)
        2. Smaller terms don't matter. The additioinal operations tend not to matter.   O(n^2 + 7n + 21) will simplify down to O(n^2)
    - Analyzing complexity with Big O can get fuzzy and complicated sometimes but these tips help sometimes
        - Arithmetic operations and Variable assignment is constnat regardless of the size of the element operated on
        - Accessing elements in an array (by index) or object (by key) is constant
        - In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

- Space Complexity
    - How can we analyze the runtime of an algorithm as the size of an input increases?
    - We can also use Big O notation to analyze space complexity: how much additional memory do we need to allocate in order to run the code in our algorithm?
    - Auxiliary space complexity refer to the space required by the algorithm, not including space taken up by the inputs.
    - This is what we are concerned with. Unless otherwise noted, when we talk about space complexity, technically we will be talking about auxiliary spcae complexity.
    - These basic rule of thumbs should help
        - Most primitives (booleans, numbers, undefined, null) are constant space
        - String require O(n) space (where n is the length of teh string)
        - Reference types are genrally O(n), where n is the length (for arrays) or the number of keys (for objects)

- Logarithmic Big O Notation
    - Complex mathematical expressing Big O notations sometimes involve logarithm
    - To note, logarithm is the inverse of exponentiation
    - Logarithmic algorithm are great and are sometimes favoured above linear an quadratic algorithm
    - Some searching algorithms have logarithmic time complexity. Efficient sorting algorithms also involve logarithms.
    - Recursion sometimes involves logarithmic space complexity.

- Some Recap and tips.
    - To analyze the performance of an algorithm, we use Big O notation
    - Big O Notation can give us a high level understanding of the time or space complexity of an algorithm
    - Big O notation doesn's care about precision, only about general trends (linear:? quadratic? constant?)
    - The time and space complexity ( as measured by Big O) depends on the algorithm, not the hardware used to run the algorithm

