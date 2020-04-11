<template>
  <main class="site-main u-bg-white" role="main">
    <section class="section-padding">
      <div class="l-wrap">

        <!-- BACK HOME -->
        <router-link :to="{ name: 'Home' }" class="u-top-el">Back home</router-link>

        <!-- MOST USED UNIX COMMANDS -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>Most used UNIX commands</caption>
            <thead>
              <tr>
                <th>Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(command, index) in data.mostUsedUnixCommands" :key="index">
                <td><code class="inline">{{ command.name }}</code></td>
                <td>
                  {{ command.description }} 
                  <a v-if="command.link" :href="command.link">Learn more</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div><!-- /.c-table-responsive -->

        <!-- SUMMARY OF RITHM SCHOOL TERMINAL COURSE -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>Summary of <a href="https://www.rithmschool.com/courses/terminal" target="_blank">Terminal and UNIX Course from
                (Rithm School)</a></caption>
            <thead>
              <tr>
                <th>Command</th>
                <th>Short for</th>
                <th>Use for</th>
              </tr>
            </thead>
            <tbody>
              <tr class="info">
                <td colspan="3">Checking Status</td>
              </tr>
              <tr>
                <td><code class="inline">whoami</code></td>
                <td>who am i</td>
                <td>To check who the current user is.</td>
              </tr>
              <tr>
                <td><code class="inline">pwd</code></td>
                <td>print working directory / present working directory</td>
                <td>Display current working directory in absolute path.</td>
              </tr>
              <tr class="info">
                <td colspan="3">Listing Files and Flags.</td>
              </tr>
              <tr>
                <td><code class="inline">ls</code></td>
                <td>list</td>
                <td>List information about the FILEs (the current directory by default). Sort entries alphabetically by
                  default.</td>
              </tr>
              <tr>
                <td><code class="inline">ls --help</code></td>
                <td></td>
                <td>Pass <code class="inline">--help</code> option to any UNIX command to know details about this
                  command.</td>
              </tr>
              <tr>
                <td><code class="inline">ls -l</code></td>
                <td></td>
                <td>Pass <code class="inline">-l</code> option to get a long listing format.</td>
              </tr>
              <tr>
                <td><code class="inline">ls -a</code></td>
                <td></td>
                <td>Pass <code class="inline">-a</code> or <code class="inline">--all</code> option to get all entries
                  including hidden folders (starting with dot).</td>
              </tr>
              <tr>
                <td><code class="inline">ls -l -a</code></td>
                <td></td>
                <td>Pass both <code class="inline">-l</code> and <code class="inline">-a</code> option to get all
                  entries including hidden folders (starting with dot) and a long listing format.</td>
              </tr>
              <tr>
                <td><code class="inline">ls -la</code></td>
                <td></td>
                <td>Pass both option combined (<code class="inline">-la</code>) to get all entries including hidden
                  folders (starting with dot) and a long listing format.</td>
              </tr>
              <tr class="info">
                <td colspan="3">Moving Around / Navigating in Terminal</td>
              </tr>
              <tr>
                <td><code class="inline">cd</code></td>
                <td>change directory</td>
                <td></td>
              </tr>
              <tr>
                <td><code class="inline">cd ..</code></td>
                <td></td>
                <td>Move up one directory</td>
              </tr>
              <tr>
                <td><code class="inline">cd ../..</code></td>
                <td></td>
                <td>Move up two directory</td>
              </tr>
              <tr>
                <td><code class="inline">cd DIRECTORY_NAME</code></td>
                <td></td>
                <td>Move into one directory</td>
              </tr>
              <tr>
                <td><code class="inline">cd DIRECTORY_PATH</code></td>
                <td></td>
                <td>Move into a specific directory</td>
              </tr>
              <tr class="info">
                <td colspan="3">Creating Files And Folders</td>
              </tr>
              <tr>
                <td><code class="inline">mkdir</code></td>
                <td>make directory</td>
                <td></td>
              </tr>
              <tr>
                <td><code class="inline">mkdir FOLDER_NAME</code></td>
                <td></td>
                <td>Make one directory called FOLDER_NAME</td>
              </tr>
              <tr>
                <td><code class="inline">mkdir FOLDER_NAME1 FOLDER_NAME2</code></td>
                <td></td>
                <td>Make two directory called FOLDER_NAME1 and FOLDER_NAME 2</td>
              </tr>
              <tr>
                <td><code class="inline">touch FILENAME</code></td>
                <td></td>
                <td>Create a file named FILENAME</td>
              </tr>
              <tr>
                <td><code class="inline">touch FILENAME1 FILENAME2</code></td>
                <td></td>
                <td>Create two file named FILENAME1 and FILENAME2</td>
              </tr>
              <tr class="info">
                <td colspan="3">Displaying Contents Of A File</td>
              </tr>
              <tr>
                <td><code class="inline">cat</code></td>
                <td>concatenate</td>
                <td>Display contents of a file</td>
              </tr>
              <tr>
                <td><code class="inline">cat file.txt</code></td>
                <td></td>
                <td>Display contents of the file.txt</td>
              </tr>
              <tr>
                <td><code class="inline">less</code></td>
                <td></td>
                <td>Display contents of a file in a modal</td>
              </tr>
              <tr>
                <td><code class="inline">less file.txt</code></td>
                <td></td>
                <td>Display contents of the file.txt in a modal. Enter q to exit the modal</td>
              </tr>
              <tr>
                <td><code class="inline">echo</code></td>
                <td></td>
                <td>Writes text to the terminal</td>
              </tr>
              <tr>
                <td><code class="inline">echo "Hello World"</code></td>
                <td></td>
                <td>Writes Hello World to the terminal</td>
              </tr>
              <tr>
                <td><code class="inline">echo "Hello World" > FILE_NAME</code></td>
                <td></td>
                <td>Writes Hello World to the FILE_NAME file</td>
              </tr>
              <tr class="info">
                <td colspan="3">Opening up a file</td>
              </tr>
              <tr>
                <td><code class="inline">open</code></td>
                <td>open a file or directory</td>
                <td>not found in windows</td>
              </tr>
              <tr>
                <td><code class="inline">start</code></td>
                <td>open a file or directory</td>
                <td>For Windows only</td>
              </tr>
              <tr>
                <td><code class="inline">start file.txt</code></td>
                <td></td>
                <td>Open file.txt in notepad</td>
              </tr>
              <tr>
                <td><code class="inline">start .</code></td>
                <td></td>
                <td>Open all the files and folder of the current directory into explorer</td>
              </tr>
              <tr class="info">
                <td colspan="3">Moving Files And Folders</td>
              </tr>
              <tr>
                <td><code class="inline">mv</code></td>
                <td>move</td>
                <td>Move files and folders</td>
              </tr>
              <tr>
                <td><code class="inline">mv file.txt folder/file.txt</code></td>
                <td></td>
                <td>Move file.txt to folder/file.txt</td>
              </tr>
              <tr>
                <td><code class="inline">mv file.txt rename.txt</code></td>
                <td></td>
                <td>Rename file.txt to rename.txt</td>
              </tr>
              <tr>
                <td><code class="inline">mv folder another_folder</code></td>
                <td></td>
                <td>Move folder to another folder</td>
              </tr>
              <tr class="info">
                <td colspan="3">Copying Files and Folders</td>
              </tr>
              <tr>
                <td><code class="inline">cp</code></td>
                <td>copy</td>
                <td>Copy files and folders</td>
              </tr>
              <tr>
                <td><code class="inline">cp file.txt file_copy.txt</code></td>
                <td></td>
                <td>Copy file.txt and call it file_copy.txt</td>
              </tr>
              <tr>
                <td><code class="inline">cp -r</code></td>
                <td>copy directory</td>
                <td></td>
              </tr>
              <tr>
                <td><code class="inline">cp -r folder folder_copy</code></td>
                <td></td>
                <td>Copy folder and call it folder_copy</td>
              </tr>
              <tr class="info">
                <td colspan="3">Deleting Files And Folders</td>
              </tr>
              <tr>
                <td><code class="inline">rm</code></td>
                <td>remove</td>
                <td></td>
              </tr>
              <tr>
                <td><code class="inline">rm file.txt</code></td>
                <td></td>
                <td>Remove a file</td>
              </tr>
              <tr>
                <td><code class="inline">rm -rf folder</code></td>
                <td></td>
                <td>Remove a directory</td>
              </tr>
              <tr>
                <td><code class="inline">rmdir</code></td>
                <td>remove directory</td>
                <td></td>
              </tr>
              <tr>
                <td><code class="inline">rmdir empty_directory</code></td>
                <td></td>
                <td>Remove an empty directory</td>
              </tr>
            </tbody>
          </table>
        </div><!-- /.c-table-responsive -->

        <!-- SUMMARY OF LEARN ENOUGH COMMAND LINE TO BE DANGEROUS -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>Summary of <a href="https://www.learnenough.com/command-line-tutorial" target="_blank">learn enough command line to be dangerous</a></caption>
            <thead>
              <tr>
                <th>Command</th>
                <th>Description</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr 
                v-for="(command, index) in data.generalUnixCommands"
                :key="index">
                <td>
                  <code class="inline">{{ command.name }}</code>
                </td>
                <td>{{ command.description }}</td>
                <td><code class="inline" v-if="command.example">{{ command.example }}</code></td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">*** String inside [] (brackets) are variables.</td>
              </tr>
            </tfoot>
          </table>
        </div><!-- /.c-table-responsive -->

        <!-- THE MOST IMPORTANT LESS COMMANDS -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>The most important less commands</caption>
            <thead>
              <th>Command</th>
              <th>Description</th>
              <th>Example</th>
            </thead>
            <tbody>
              <tr>
                <td><code class="inline">up &amp; down arrow keys</code></td>
                <td>Move up or down one line</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><code class="inline">spacebar</code></td>
                <td>Move forward one page</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><code class="inline">f</code></td>
                <td>Move forward one page</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><code class="inline">b</code></td>
                <td>Move backward one page</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><code class="inline">G</code></td>
                <td>Move to end of file</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><code class="inline">1G</code></td>
                <td>Move to beginning of file</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><code class="inline">11G</code></td>
                <td>Move to the line number 11</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><code class="inline">/string</code></td>
                <td>Search file for string</td>
                <td><code class="inline">/rose</code></td>
              </tr>
              <tr>
                <td><code class="inline">n</code></td>
                <td>Move to next search result</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><code class="inline">N</code></td>
                <td>Move to previous search result</td>
                <td>&nbsp;</td>
              </tr>
              <tr>
                <td><code class="inline">q</code></td>
                <td>Quit</td>
                <td>&nbsp;</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3">*** Case Sensitive</td>
              </tr>
              <tr>
                <td colspan="3">
                  <a href="https://en.wikipedia.org/wiki/Less_(Unix)">Wikipedia page on <code
                      class="inline">less</code></a>
                </td>
              </tr>
            </tfoot>
          </table>
        </div><!-- /.c-table-responsive -->

        <!-- REFERENCE LINKS -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>References</caption>
            <tbody>
              <tr>
                <td>
                  <a href="https://www.gnu.org/software/coreutils/manual/html_node/index.html">Official GNU Manual</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://en.wikipedia.org/wiki/List_of_Unix_commands">List of Unix commands (Wikipedia
                    page)</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.computerhope.com/unix/overview.htm">Overview of Unix and Linux commands
                    (Computerhope)</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.computerhope.com/unix.htm">Unix and Linux Commands Help (Computerhope)</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://ss64.com/bash/">An A-Z Index of the Bash command line for Linux (ss64)</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://fossbytes.com/a-z-list-linux-command-line-reference/">The Ultimate A To Z List of
                    Linux Commands (Fossbytes)</a>
                </td>
              </tr>
              <tr class="info">
                <td>Windows specific</td>
              </tr>
              <tr>
                <td>
                  <a href="https://ss64.com/nt/">An A-Z Index of the Windows CMD command line (ss64)</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://fossbytes.com/complete-windows-cmd-commands-list-index/">The Ultimate A to Z List Of
                    Windows CMD Commands (Fossbytes)</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div><!-- /.c-table-responsive -->

        <!-- FURTHER READING -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>Further reading</caption>
            <tbody>
              <tr>
                <td>
                  <a href="https://kb.iu.edu/d/agat">What is Unix? (Indiana University)</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://kb.iu.edu/d/afsk">Introduction to Unix commands (Indiana University)</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://www.ee.surrey.ac.uk/Teaching/Unix/">UNIX Tutorial for Beginners (University of
                    Surrey)</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="http://mally.stanford.edu/~sr/computing/basic-unix.html">Basic UNIX commands (Stanford
                    University)</a>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="https://www.guru99.com/introduction-linux.html">Linux Beginner Tutorials (Guru99)</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div><!-- /.c-table-responsive -->

        <!-- REFERENCE BOOKS -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>Recommened Books</caption>
            <tbody>
              <tr>
                <td>
                  <a href="http://www.ee.surrey.ac.uk/Teaching/Unix/books-uk.html">Recommended UNIX Books (University of
                    Surrey)</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div><!-- /.c-table-responsive -->

        <!-- NOTES -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>Notes</caption>
            <tbody>
              <tr>
                <td>In the Git Bash on windows, <code class="inline">/</code> represents root directory.</td>
              </tr>
              <tr>
                <td>In the Command Prompt on windows, <code class="inline">C:\></code> represents root directory.</td>
              </tr>
              <tr>
                <td>In the Git Bash on windows, <code class="inline">~</code> (tilde) represents home directory. Which
                  is <code class="inline">/c/Users/Saabbir</code></td>
              </tr>
              <tr>
                <td>In the Command Prompt on windows, <code class="inline">C:\Users\Saabbir></code> represents home
                  directory.</td>
              </tr>
              <tr>
                <td>In the Git Bash on windows, <code class="inline">cd /</code> (forwardslash) will take you to the
                  root directory.</td>
              </tr>
              <tr>
                <td>In the Command Prompt on windows, <code class="inline">cd \</code> (backslash) will take you to the
                  root directory.</td>
              </tr>
              <tr>
                <td>
                  In the command-line, control key (<code class="inline">Ctrl</code>) usually written as <code
                    class="inline">^</code>
                </td>
              </tr>
              <tr>
                <td>
                  Combined keyboard shortcut like <code class="inline">Ctrl+C</code> doesn't have to be uppercase.
                </td>
              </tr>
              <tr>
                <td>
                  Pressing up arrow key in the keyboard will get you the previous command you executed.
                </td>
              </tr>
              <tr>
                <td>To move around the command line we use ^A, ^E, ^U</td>
              </tr>
            </tbody>
          </table>
        </div><!-- /.c-table-responsive -->

        <!-- KEYBOARD SHORTCUTS -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>Keyboard Shortcuts</caption>
            <thead>
              <th>Shortcut</th>
              <th>Description</th>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code class="inline">^A</code>
                </td>
                <td>To get to the beginning of the line.</td>
              </tr>
              <tr>
                <td>
                  <code class="inline">^E</code>
                </td>
                <td>To get to the end of the line.</td>
              </tr>
              <tr>
                <td>
                  <code class="inline">^U</code>
                </td>
                <td>Clears to the beginning of the line and lets us start over.</td>
              </tr>
              <tr>
                <td>
                  <code class="inline">^C</code>
                </td>
                <td>Get out of any trouble. Like terminal gets hang or not taking any command.</td>
              </tr>
              <tr>
                <td>
                  <code class="inline">^L</code>
                </td>
                <td>To clear the screen. Similiar to the <code class="inline">clear</code> command.</td>
              </tr>
              <tr>
                <td>
                  <code class="inline">^D</code>
                </td>
                <td>To exit the window. Similiar to the <code class="inline">exit</code> command.</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2">*** In here, <code class="inline">^</code> key represents <code
                    class="inline">Ctrl</code> key. Therefore, <code class="inline">^A</code> = <code
                    class="inline">Ctrl+A</code></td>
              </tr>
            </tfoot>
          </table>
        </div><!-- /.c-table-responsive -->

        <!-- WINDOWS COMMAND PROMPT COMMANDS -->
        <div class="c-table-responsive">
          <table class="c-table">
            <caption>Windows Command Prompt Commands</caption>
            <thead>
              <tr>
                <th>Command</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code class="inline">dir</code></td>
                <td>To list all the files and folders in the current directory. Similiar to the <code
                    class="inline">ls</code> UNIX command.</td>
              </tr>
              <tr>
                <td><code class="inline">cls</code></td>
                <td>Clear the current window by moving the cursor at the top. Similiar to the <code
                    class="inline">clear</code> UNIX command.</td>
              </tr>
            </tbody>
          </table>
        </div><!-- /.c-table-responsive -->
      </div><!-- /.l-wrap -->
    </section>
  </main>
</template>

<script>
  import data from '../data/data.js'

  export default {
    name: 'CommandLine',
    data() {
      return {
        data
      }
    }
  }
</script>