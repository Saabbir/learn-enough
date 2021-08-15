<template>
  <section class="u-section-padding">
    <div class="l-wrap">
      <!-- BACK HOME -->
      <router-link :to="{ name: 'Home' }" class="u-mb-20 u-text-underline"
        >Back home</router-link
      >

      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            Learn enough Git
          </caption>
          <thead>
            <tr>
              <th>Command</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr class="info">
              <td colspan="2">Git Config - First-Time Git Setup</td>
            </tr>
            <tr>
              <td><code class="inline">git config --list</code></td>
              <td>To see all the configuration settings.</td>
            </tr>
            <tr>
              <td>
                <code class="inline"
                  >git config --global user.name "John Doe"</code
                >
              </td>
              <td>To setup global user name for the system.</td>
            </tr>
            <tr>
              <td>
                <code class="inline"
                  >git config --global user.email johndoe@example.com</code
                >
              </td>
              <td>To setup global email address for the system.</td>
            </tr>
            <tr>
              <td>
                <code class="inline">git config --global core.editor vim</code>
              </td>
              <td>To setup global editor to use in git.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Getting Help</td>
            </tr>
            <tr>
              <td><code class="inline">git help config</code></td>
              <td>To get help for any git command.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Git Basics</td>
            </tr>
            <tr>
              <td><code class="inline">git init</code></td>
              <td>To initialize an empty git repository.</td>
            </tr>
            <tr>
              <td><code class="inline">git clone [REPO_URL]</code></td>
              <td>To work with an existing git repository.</td>
            </tr>
            <tr>
              <td><code class="inline">git status</code></td>
              <td>To check the status of the repository.</td>
            </tr>
            <tr>
              <td><code class="inline">git add [FILE_NAME]</code></td>
              <td>To add files from working directory into staging area.</td>
            </tr>
            <tr>
              <td><code class="inline">git stash</code></td>
              <td>To go back to a clean working directory.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Git Branch</td>
            </tr>
            <tr>
              <td><code class="inline">git branch -d [BRANCH_NAME]</code></td>
              <td>To delete a branch.</td>
            </tr>
            <tr>
              <td><code class="inline">git branch -D [BRANCH_NAME]</code></td>
              <td>To delete an unmerged branch.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Git Remote</td>
            </tr>
            <tr>
              <td><code class="inline">git remote</code></td>
              <td>To see the remote name.</td>
            </tr>
            <tr>
              <td><code class="inline">git remote -v</code></td>
              <td>To see the remote name and url.</td>
            </tr>
            <tr>
              <td>
                <code class="inline"
                  >git remote add [REMOTE_NAME] [REMOTE_URL]</code
                >
              </td>
              <td>To add remote repository.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Git Commit</td>
            </tr>
            <tr>
              <td><code class="inline">git commit</code></td>
              <td>
                To commit your changes. Doing so launches your editor of choice.
              </td>
            </tr>
            <tr>
              <td><code class="inline">git commit -m [MESSAGE]</code></td>
              <td>To commit message inline.</td>
            </tr>
            <tr>
              <td><code class="inline">git commit -a -m [MESSAGE]</code></td>
              <td>To skip the staging area.</td>
            </tr>
            <tr>
              <td><code class="inline">git commit --amend</code></td>
              <td>To undo the last commit.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Git Reset</td>
            </tr>
            <tr>
              <td><code class="inline">git reset HEAD [FILE_NAME]</code></td>
              <td>To unstage a file.</td>
            </tr>
            <tr>
              <td><code class="inline">git reset --hard HEAD~1</code></td>
              <td>To remove last commit.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Git Checkout</td>
            </tr>
            <tr>
              <td><code class="inline">git checkout -- [FILE_NAME]</code></td>
              <td>To discard changes in working directory.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Git Log</td>
            </tr>
            <tr>
              <td><code class="inline">git log</code></td>
              <td>To see commit history in details.</td>
            </tr>
            <tr>
              <td><code class="inline">git log --oneline</code></td>
              <td>To see commit history in oneline.</td>
            </tr>
            <tr class="info">
              <td colspan="2">Git Diff</td>
            </tr>
            <tr>
              <td><code class="inline">git diff</code></td>
              <td>
                To see the differences between working directory and staging
                area.
              </td>
            </tr>
            <tr>
              <td><code class="inline">git diff --staged</code></td>
              <td>
                To see the differences between staging area and last commit.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.c-table-responsive -->

      <!-- Further reading -->
      <div class="c-table-responsive">
        <table class="c-table">
          <caption>
            Further reading
          </caption>
          <tbody>
            <tr>
              <td>
                <a href="https://guides.github.com/introduction/git-handbook/"
                  >Git Handbook ( From GitHub )</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- /.c-table-responsive -->
    </div>
    <!-- /.l-wrap -->
  </section>
</template>

<script>
export default {
  name: "Git",
};
</script>