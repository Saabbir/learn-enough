const data = {
  mostUsedUnixCommands: [
    {
      name: 'pwd',
      description: 'Print working directory'
    },
    {
      name: 'cd',
      description: 'Change Directory',
      link: 'https://www.computerhope.com/unix/ucd.htm'
    },
    {
      name: 'ls',
      description: 'List files and folders'
    },
    {
      name: 'clear',
      description: 'Clear terminal'
    },
    {
      name: 'mkdir',
      description: 'Make directory'
    },
    {
      name: 'touch',
      description: 'Create a file'
    },
  ],
  generalUnixCommands: [
    {
      name: 'echo [string]',
      description: 'Print string to screen',
      example: '$ echo hello'
    },
    {
      name: 'man [command]',
      description: 'Display manual page for command',
      example: '$ man echo'
    },
    {
      name: '^C',
      description: 'Get out of trouble',
      example: `$ echo 'hello
      > ^C`
    },
    {
      name: '^A',
      description: 'Move to beginning of line',
      example: null
    },
    {
      name: '^E',
      description: 'Move to end of line',
      example: null
    },
    {
      name: '^U',
      description: 'Delete to beginning of line',
      example: null
    },
    {
      name: 'Up & down arrow',
      description: 'Scroll through previous commands',
      example: null
    },
    {
      name: 'clear or ^L',
      description: 'Clear screen',
      example: '$ clear'
    },
    {
      name: 'exit or ^D',
      description: 'Exit terminal',
      example: '$ exit'
    },
    {
      name: '>',
      description: '$ echo foo > foo.txt',
      example: '$ echo foo > foo.txt'
    },
    {
      name: '>>',
      description: 'Append output to filename',
      example: '$ echo bar >> foo.txt'
    },
    {
      name: 'cat [file]',
      description: 'Print contents of a file to the screen',
      example: '$ cat foo.txt'
    },
    {
      name: 'diff [file1] [file2]',
      description: 'Diff files 1 & 2',
      example: '$ diff foo.txt bar.txt'
    },
    {
      name: 'ls',
      description: 'List directory or file',
      example: '$ ls hello.txt'
    },
    {
      name: 'ls -l',
      description: 'List long form',
      example: '$ ls -l hello.txt'
    },
    {
      name: 'ls -rtl',
      description: 'Long by reverse modification time',
      example: '$ ls -rtl'
    },
    {
      name: 'ls -a',
      description: 'List all (including hidden)',
      example: '$ ls -a'
    },
    {
      name: 'touch [file]',
      description: 'Create an empty file',
      example: '$ touch foo.txt'
    },
    {
      name: 'mv [old] [new]',
      description: 'Rename (move) from old to new',
      example: '$ mv foo.txt bar.txt'
    },
    {
      name: 'cp [old] [new]',
      description: 'Copy old to new',
      example: '$ cp old.txt new.txt'
    },
    {
      name: 'rm [file]',
      description: 'Remove (delete) file',
      example: '$ rm foo.txt'
    },
    {
      name: 'rm -f [file]',
      description: 'Force-remove file',
      example: '$ rm -f foo.txt'
    },
    {
      name: 'curl',
      description: 'Interact with URLs',
      example: '$ curl -O example.com'
    },
    {
      name: 'which',
      description: 'Locate a program on the path',
      example: '$ which curl'
    },
    {
      name: 'head [file]',
      description: 'Display first part of file',
      example: '$ head foo.txt'
    },
    {
      name: 'tail [file]',
      description: 'Display last part of file',
      example: '$ tail bar'
    },
    {
      name: 'wc [file]',
      description: 'Count lines, words, bytes',
      example: '$ wc foo.txt'
    },
    {
      name: 'cmd1 | cmd2',
      description: 'Pipe cmd1 to cmd2',
      example: '$ head foo.txt | wc'
    },
    {
      name: 'ping [url]',
      description: 'Ping a server URL',
      example: '$ ping google.com'
    },
    {
      name: 'less [file]',
      description: 'View file contents interactively',
      example: '$ less foo.txt'
    },
    {
      name: 'grep [string] [file]',
      description: 'Find string in file',
      example: '$ grep rose sonnets.txt'
    },
    {
      name: 'grep -i [string] [file]',
      description: 'Find case-insensitively',
      example: '$ grep -i rose sonnets.txt'
    },
    {
      name: 'ps',
      description: 'Show processes',
      example: '$ ps aux'
    },
    {
      name: 'top',
      description: 'Show processes (sorted)',
      example: '$ top'
    },
    {
      name: 'kill -[level] [pid]',
      description: 'Kill a process',
      example: '$ kill -15 24601'
    },
    {
      name: 'pkill -[level] -f [name]',
      description: 'Kill matching processes',
      example: '$ pkill -15 -f spring'
    },
    {
      name: 'mkdir [name]',
      description: 'Make directory with name',
      example: '$ mkdir foo'
    },
    {
      name: 'pwd',
      description: 'Print working directory',
      example: '$ pwd'
    },
    {
      name: 'cd [dir]',
      description: 'Change to dir',
      example: '$ cd foo'
    },
    {
      name: 'cd ~/[dir]',
      description: 'cd relative to home',
      example: '$ cd ~/foo'
    },
    {
      name: 'cd',
      description: 'Change to home directory',
      example: '$ cd'
    },
    {
      name: 'cd -',
      description: 'Change to previous directory',
      example: '$ cd && pwd && cd -'
    },
    {
      name: '.',
      description: 'The current directory',
      example: '$ cp ~/foo.txt .'
    },
    {
      name: '..',
      description: 'One directory up',
      example: '$ cd ..'
    },
    {
      name: 'find',
      description: 'Find files and directories',
      example: '$ find . -name foo.txt'
    },
    {
      name: 'cp -r [old] [new]',
      description: 'Copy recursively',
      example: '$ cp -r ~/foo .'
    },
    {
      name: 'rmdir [dir]',
      description: 'Remove (empty) dir',
      example: '$ rmdir foo/'
    },
    {
      name: 'rm -rf [dir]',
      description: 'Remove dir and contents',
      example: '$ rm -rf foo/'
    },
    {
      name: 'grep -ri [string] [dir]',
      description: 'Grep recursively (case-insensitive)',
      example: '$ grep -ri foo bar/'
    },
  ]
}

export default data