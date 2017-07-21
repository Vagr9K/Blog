---
title: "Making Git usage more comfortable with aliases"
cover: "/covers/git.png"
date: "2017/07/15"
category: "dotfiles"
tags:
    - dotfiles
    - git
    - aliases
---

Typing the same long command everyday gets old way too fast. Especially if it's a macro that takes 3 lines on terminal screen to type. Thankfully, we have git aliases to save us.

## How to set aliases

First of all, to actually set an alias, you have 2 options.

1. `$ git config --global alias.co checkout`

    The command line way of setting aliases is pretty straightforward. In this case, `co` is an alias for `checkout`.

2. Editing `.gitconfig`

    You `.gitconfig` might look like this:
    ```ini
    [color]
    ui = true
    [alias]
    co = checkout
    ```

    You can also use `"!"` to execute the alised command in a shell.
    ```ini
    di=!git status --porcelain --short --ignored | sed -n '"s/^!! //p"'
    ```

## Inspiration for aliases

What are the most used commands in your case? Commit? Checkout? Then set them as aliases thet would make sense for you. In most cases that's the best way of doing so.

But if you want something "futureproof", there are a couple of great sources for that.

* [Prezto's Git aliases](https://github.com/sorin-ionescu/prezto/blob/master/modules/git/alias.zsh)

    Probably the best organization of aliases. They are actually supposed to be used from shell, not as a git subcommand, but more on that later.


* [Git Aliases of the Gods! - Git Merge 2017](https://www.youtube.com/watch?v=3IIaOj1Lhb0)

    This is a talk by a BitBucket developer Tim Pettersen. Some of his aliases didn't make into my list for complexity reasons, but if you are interested in serving your Git repository to the internet, you might want to check out the video at [11:32](https://youtu.be/3IIaOj1Lhb0?t=11m32s).


* Your imagination

    You need something more? Add it yourself!


## Warnings

While creating your aliases you must consider multiple things:

1. Git aliases are case insensitive

    ```sh
    git gco # Lowercase
    git gCo # is actually the same
    ```

2. Creating way too many shell aliases will probably result in command name clashes.

    For example `gs` which I use for `git status` will clash with GhostScript's executable. Fortunately for me, I pretty much never use GhostScript, so that's a loss I can live with.

    You can also source an executable by typing it's whole path to skip aliases, like `/usr/bin/gs`.

## Actual aliases

First of all, we are going to modify Prezto's aliases from shell to their respective Git versions.

During the conversion, we will lose `git submodule` and `git flow` aliases since they are using uppercase letters to differentiate from `git stash` and `git fetch`.

```ini
[alias]
  # Branch (b)
  b=branch
  ba=branch --all --verbose --verbose
  bl=branch --verbose --verbose
  bc=checkout -b
  bx=branch --delete
  bm=branch --move
  bs=show-branch

  # Commit (c)
  c=commit
  ca=commit --all
  cm=commit --message
  cam=commit --all --message
  co=checkout
  cop=checkout --patch
  cf=commit --amend --reuse-message HEAD
  chp=cherry-pick
  cr=revert
  cres=reset "HEAD^"
  cs=show

  # Data (d)
  d=ls-files
  dc=ls-files --cached
  dd=ls-files --deleted
  dx=ls-files --deleted
  dm=ls-files --modified
  do=ls-files --other --exclude-standard
  dk=ls-files --killed
  di=!git status --porcelain --short --ignored | sed -n '"s/^!! //p"'

  # Fetch (f)
  f=fetch
  fa=fetch --all
  fc=clone
  fp=pull
  fr=pull --rebase
  fpr=pull --rebase

  # Grep (g)
  g=grep
  gi=grep --ignore-case
  gl=grep --files-with-matches
  gL=grep --files-without-matches
  gv=grep --invert-match
  gw=grep --word-regexp

  # Index (i)
  ia=add
  iap=add --patch
  iu=add --update
  id=diff --no-ext-diff --cached
  idw=diff --no-ext-diff --cached --word-diff
  ir=reset
  irp=reset --patch
  ix=rm -r --cached

  # Merge (m)
  m=merge
  mnc=merge --no-commit
  mf=merge --ff
  mnf=merge --no-ff
  ma=merge --abort
  mt=mergetool

  # Push (p)
  p=push
  pf=push --force-with-lease
  pa=push --all
  pt=push --tags
  pat=push --all && git push --tags
  pc=!git push --set-upstream origin "$(git-branch-current 2> /dev/null)"
  pp=!git pull origin "$(git-branch-current 2> /dev/null)" && git push origin "$(git-branch-current 2> /dev/null)"

  # Rebase (r)
  r=rebase
  ra=rebase --abort
  rc=rebase --continue
  ri=rebase --interactive
  rs=rebase --skip

  # Stash (s)
  stsh = stash --keep-index
  staash = stash --include-untracked
  staaash = stash --all
  s=stash
  sa=stash apply
  sx=stash drop
  sl=stash list
  sd=stash show --patch --stat
  sp=stash pop
  ss=stash save
  ssu=stash save --include-untracked

  # Working Copy (w)
  ws=status
  wd=diff --no-ext-diff
  wdw=diff --no-ext-diff --word-diff
  wrs=reset --soft
  wrh=reset --hard
  wc=clean -n
  wcf=clean -f
  wcfd=clean -df
  wx=rm -r
  wxf=rm -rf
```

Then, we are going to add pretty looking logs based on [this stackoverflow answer](https://stackoverflow.com/questions/1057564/pretty-git-branch-graphs/9074343#9074343).

```ini
  # Log (l)
  l1 = log --graph --abbrev-commit --decorate --date=relative --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
  l2 = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold cyan)%aD%C(reset) %C(bold green)(%ar)%C(reset)%C(bold yellow)%d%C(reset)%n''          %C(white)%s%C(reset) %C(dim white)- %an%C(reset)' --all
  l = !git l1
```

Would be cool to have a snapshot of changes without doing commits, right?

```ini
  snapshot = !git stash save "snapshot: $(date)" && git stash apply "stash@{0}"
  ls-snapshots = !git stash list --grep snapshot
```

Listing recent branches is sometimes useful.

```ini
  recent-branches = !git for-each-ref --count=15 --sort=-committerdate refs/heads/ --format='%(refname:short)'
```

And in the end, URL shorthands to popular websites.

```ini
[url "https://aur.archlinux.org/"]
  insteadOf = "aur:"
[url "ssh+git://aur4.archlinux.org/"]
  pushInsteadOf = "aur:"
[url "https://github.com/"]
  insteadOf = "gh:"
[url "git@github.com:"]
  pushInsteadOf = "gh:"
```

## General tips

Those aren't really aliases, but will probably be useful to you.

* Verbose commit messages by default (includes commented out diff)

    ```ini
    [commit]
        verbose = true
    ```

* Default push location

    ```ini
    [push]
        default = upstream
    ```

* Enable [rerere](https://git-scm.com/blog/2010/03/08/rerere.html)

    ```ini
    [rerere]
        enabled = true
    ```

* Enable colored output

    ```ini
    [color]
        ui = true
    ```

## But in the end...

Those aliases might be an overkill for your use case. If you ever feel like you are wasting more time on "upgrading" your workflow instead of getting work done, consider stopping.

That being said, you can check out the full file in [my dotfiles repo](https://github.com/Vagr9K/dotfiles/blob/master/git/gitconfig).
