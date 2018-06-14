# doubleclick-menu

Prevent the redirection of the parent menu on first tap to show the child in mobile devices and on the second tap while the child is showed it will redirect to the link of the parent menu.

Note: Only on mobile / tablet device that will show the effect of this plugin.

### How to use ?

Include first the jQuery library
```sh
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
```

Include the doubleclick-menu.min.js
```sh
<script src="doubleclick-menu.min.js"></script>
```

Now initialize the doubleclick-menu
```sh
<script type="text/javascript">
    <!-- Default usage -->
    $( '.menu-item-has-children > a' ).doubleclickMenu();
</script>
```

### Options

| Name | Default | Description |
| ------ | ------ | ------ |
| submenuContainer `string` | '.dropdown-menu'  | Class of submenu's container. |
| hamburgerMenu `string` | '.navbar-toggler' | Class of your hamburger menu. |
| closeButton `string` | 'Close' | Close button to hide the child menu. |

### Contributing
For a pull request to be considered it must resolve a bug, or add a feature which is beneficial to a large audience.

Requests must be made against the develop branch. Pull requests submitted against the master branch will not be considered.

All pull requests are subject to approval by the repository owners, who have sole discretion over acceptance or denial.

### License
doubleclick-menu is under MIT license - https://github.com/bryan-sebastian/doubleclick-menu/blob/master/LICENSE