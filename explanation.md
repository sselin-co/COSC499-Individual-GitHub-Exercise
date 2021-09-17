# Explanation

The 2 main features I implemented were printing to text file and scanning a text file. The printer only needs to accept a string + filename and print the string to a file successfully, and the scanner is expected to accept a filename and return a string with the data in the file. All of my test cases worked except for printing undefined. This breaks because I have no currently implemented a handler for undefined values. This could be fixed by using something like TypeScript which has type safety.
