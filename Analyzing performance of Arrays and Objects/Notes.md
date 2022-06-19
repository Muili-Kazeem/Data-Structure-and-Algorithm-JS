**Notes**

- The Big O of Objects
    - Objects are unordered data structures stored in key-value pairs
    - They work well when order doesn't matter
    - Also efficient when there's need for fast access / insertion and removal
    - The Big O of basic objects oeprations are as follow:
        - Insertion - O(1)
        - Removal - O(1)
        - Searching - O(n)
        - Access - O(1)
    - Searching doesn't involve looking for a key. It involves checking if a data is in a value somewhere
    - Object's Methods such as Object.keys(), Object.values(), Objects.entries() all has O(n). While hasOwnProperty() has O(1)
    - This is because the execution has to go through ever key-value pairs in the object
    - hasOwnProperty() just has to check the value of the key passed into it. So, it's a one time constant thing/operation

- When are Array Slow
    - An ordered list of data. The ordering matter but it sometimes comes at a cost
    - Accessing data in an array is very quick. it's Big O notation is O(1)
    - This is because the runtime gets the data by using the index. It doesn't necessarily search for the data from the inception to the position of the actual data. It uses the index to get the data regardless of the array's length
    - The Big O Notation of insertion into an array depends.
        - If the insertion is to the end of the array, the Big O is O(1). This is because there's no disruption of the already indexed array. It just inserts the value and assign it its new index
        - If the insertion is to the beginning of the array, the Big O is O(n). This is because the entire array has to be re-indexed as the new value has disrupted and taken an already indexed index. Hence, re-indexing of the entire value in the array. The same thing goes for the removal of value from the beginning of the array
    - Searching of an array is O(n)

- Big O of Array methods
    - shift(), unshift(), concat(), slice(), splice(), forEach/map/filter/reduce e.t.c. all have a Big O of O(n)
    - push(), pop() has Big O of O(1). Remember this is adding and removal of values from the end of an array. Easy-peasy. No re-indexing
    - while sort has O(n * log n). We will talk about this extensively in subsequent modules