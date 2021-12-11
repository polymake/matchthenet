# MatchTheNet

This is a game about 3-dimensional polytopes for a single player.
You will meet the five Platonic Solids and their best friends.

In each round of the game you will see some polytopes on the top half of the window.
You can rotate them to look at them from all sides.

In the bottom half you will see the same number of planar nets.
These are unfoldings of polytopes into the plane.
The goal is to match the nets to the polytopes.
You can switch any pair of nets by moving one over the other.

------------------------------

## Start the game

Start the game by opening [index.html](index.html) in your favourite web browser with javascript enabled. There is no installation necessary. 

------------------------------

## Change settings

Beside the settings button in the upper right corner during the game, there are several customizable setting variables at the beginning of the file [js/variables.js](js/variables.js).

------------------------------

## Add new languages

The file [js/translation.js](js/translation.js) contains the translations of the occuring terms.
In this file, the list
```javascript
var showLanguages = ['en','de'];
```
determines the available languages in the game. The first one sets the default.

To add a new language, just copy the list for english ('en') and change the translation for each term.

------------------------------

# License and author information

This project by Michael Joswig, Georg Loho, Benjamin Lorenz, Rico Raber, Oguzhan Yürük and the [polymake](https://polymake.org) team is published under GPLv3 and CC BY-NC-SA, see [LICENSE.md](LICENSE.md) for details. It can be played at [MatchTheNet](https://matchthenet.de).

Additional polytopes are contributed by Mara Belotti, Andrei Comaneci, Dan Corey, Holger Eble, Alexej Jordan, Lars Kastner, Marta Panizzut, Sylvain Spitz.

You can contact the authors via mail:
surname ( at ) math.tu-berlin.de
