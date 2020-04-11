const data = {
  builtInConstructs: [
    {
      name: 'if',
      description: 'The if construct is one of the most important features of many languages, PHP included. It allows for conditional execution of code fragments.'
    },
    {
      name: 'else',
      description: ''
    },
    {
      name: 'elseif/else if',
      description: ''
    },
    {
      name: 'while',
      description: 'while loops are the simplest type of loop in PHP. They behave just like their C counterparts.'
    },
    {
      name: 'do-while',
      description: 'do-while loops are very similar to while loops, except the truth expression is checked at the end of each iteration instead of in the beginning.'
    },
    {
      name: 'for',
      description: 'for loops are the most complex loops in PHP. They behave like their C counterparts.'
    },
    {
      name: 'foreach',
      description: 'The foreach construct provides an easy way to iterate over arrays.'
    },
    {
      name: 'break',
      description: 'break ends execution of the current for, foreach, while, do-while or switch structure.'
    },
    {
      name: 'continue',
      description: 'continue is used within looping structures to skip the current iteration.'
    },
    {
      name: 'switch',
      description: 'The switch statement is similar to a series of IF statements on the same expression.'
    },
    {
      name: 'return',
      description: 'If called from within a function, the return statement immediately ends execution of the current function, and returns its argument as the value of the function call.'
    },
    {
      name: 'include/include()',
      description: 'The include statement includes and evaluates the specified file. This is not really a function, but a language construct.'
    },
    {
      name: 'include_once/include_once()',
      description: ''
    },
    {
      name: 'require/require()',
      description: ''
    },
    {
      name: 'require_once/require_once()',
      description: ''
    },
  ],
  variableHandlingFunctions: [
    {
      name: 'var_dump()',
      description: "Dumps information about a variable"
    },
    {
      name: 'print_r()',
      description: "Prints human-readable information about a variable"
    },
    {
      name: 'gettype()',
      description: "Get the type of a variable"
    },
    {
      name: 'isset()',
      description: "Determine if a variable is declared and is different than NULL"
    },
    {
      name: 'unset()',
      description: "Unset a given variable"
    },
    {
      name: 'empty()',
      description: 'Determine whether a variable is empty'
    },
    {
      name: 'is_string()',
      description: 'Find whether the type of a variable is string'
    },
    {
      name: 'is_array()',
      description: "Finds whether a variable is an array"
    },
  ],
  stringFunctions: [
    {
      name: 'echo/echo()',
      description: 'Output one or more strings. This is not really a function, but a language construct.'
    },
    {
      name: 'print()',
      description: 'Output a string.'
    },
    {
      name: 'printf()',
      description: 'Output a formatted string'
    },
    {
      name: 'sprintf()',
      description: 'Return a formatted string'
    },
    {
      name: 'sscanf()',
      description: 'Parses input from a string according to a format'
    },
    {
      name: 'implode()',
      description: 'Join array elements with a string'
    },
    {
      name: 'explode()',
      description: 'Split a string by a string'
    },
    {
      name: 'ucwords()',
      description: 'Uppercase the first character of each word in a string'
    },
    {
      name: 'htmlspecialchars()',
      description: 'Convert special characters to HTML entities'
    },
    {
      name: 'trim()',
      description: 'Strip whitespace (or other characters) from the beginning and end of a string'
    },
    {
      name: 'stripslashes()',
      description: 'Un-quotes a quoted string'
    },
    {
      name: 'strip_tags()',
      description: 'Strip HTML and PHP tags from a string'
    },
    {
      name: 'strtolower()',
      description: 'Make a string lowercase'
    },
    {
      name: 'strtoupper()',
      description: 'Make a string uppercase'
    },
    {
      name: 'strlen()',
      description: "Get string length"
    },
    {
      name: 'strpos()',
      description: "Find the position of the first occurrence of a substring in a string"
    },
    {
      name: 'str_replace()',
      description: "Replace all occurrences of the search string with the replacement string"
    },
    {
      name: 'preg_replace()',
      description: "Perform a regular expression search and replace"
    },
  ],
  arrayFunctions: [
    {
      name: 'array()',
      description: "Create an array. This is not really a function, but a language construct."
    },
    {
      name: 'list()',
      description: "Assign variables as if they were an array. This is not really a function, but a language construct."
    },
    {
      name: 'count()',
      description: "Count all elements in an array, or something in an object"
    },
    {
      name: 'end()',
      description: "Set the internal pointer of an array to its last element"
    },
    {
      name: 'extract()',
      description: "Import variables into the current symbol table from an array"
    },
    {
      name: 'array_push()',
      description: "Push one or more elements onto the end of array"
    },
    {
      name: 'array_pop()',
      description: "Pop the element off the end of array"
    },
    {
      name: 'array_unshift()',
      description: "Prepend one or more elements to the beginning of an array"
    },
    {
      name: 'array_shift()',
      description: "Shift an element off the beginning of array"
    },
    {
      name: 'array_slice()',
      description: "Extract a slice of the array"
    },
    {
      name: 'array_filter()',
      description: "Filters elements of an array using a callback function"
    },
    {
      name: 'array_values()',
      description: "Return all the values of an array"
    },
    {
      name: 'array_walk()',
      description: "Apply a user supplied function to every member of an array"
    },
  ],
  dateTimeFunctions: [
    {
      name: 'date()',
      description: ""
    },
    {
      name: 'microtime()',
      description: "Return current Unix timestamp with microseconds"
    },
    {
      name: 'DateTime::createFromFormat()',
      description: ""
    },
  ],
  miscFunctions: [
    {
      name: 'exit()',
      description: 'Output a message and terminate the current script'
    },
    {
      name: 'die()',
      description: 'Equivalent to exit'
    },
    {
      name: 'define()',
      description: 'Defines a named constant'
    },
    {
      name: 'mail()',
      description: 'Send mail'
    },
    {
      name: 'header()',
      description: 'Send a raw HTTP header'
    },
    {
      name: 'session_start()',
      description: 'Start new or resume existing session'
    },
    {
      name: 'session_name()',
      description: 'Get and/or set the current session name'
    },
    {
      name: 'session_unset()',
      description: 'Free all session variables'
    },
    {
      name: 'session_destroy()',
      description: 'Destroys all data registered to a session'
    },
    {
      name: 'setcookie()',
      description: 'Send a cookie'
    },
    {
      name: 'password_hash()',
      description: 'Creates a password hash'
    },
    {
      name: 'password_verify()',
      description: 'Verifies that a password matches a hash'
    },
  ],
  mysqliFunctions: [
    {
      name: 'mysqli_connect()',
      description: 'Open a new connection to the MySQL server'
    },
    {
      name: 'mysqli_connect_error()',
      description: 'Returns a string description of the last connect error'
    },
    {
      name: 'mysqli_query()',
      description: 'Performs a query on the database'
    },
    {
      name: 'mysqli_num_rows()',
      description: 'Gets the number of rows in a result'
    },
    {
      name: 'mysqli_fetch_assoc()',
      description: 'Fetch a result row as an associative array'
    },
    {
      name: 'mysqli_error()',
      description: 'Returns a string description of the last error'
    },
    {
      name: 'mysqli_close()',
      description: 'Closes a previously opened database connection'
    },
  ]
}

export default data