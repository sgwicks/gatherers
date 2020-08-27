# Gatherers

Welcome to my very first React Game: Gatherers!

This game was built in ReactJS and is an ongoing development. What I have here is the core concept, and I have plenty more planned to make it a more fully fleshed out game. Check back now and then for updates!

## How to Install

This app was built using React v16.13, and no other dependencies. To have a go yourself:

```bash
# Clone down the repo and enter the game directory
git clone https://github.com/sgwicks/gatherers.git
cd /resource-gatherer

# Install react dependencies and start the game

npm install
npm start
```

This will run on localhost:3000, so make sure it's not in use before trying to run this.

## How to Play

You'll start the game with 1 tent, 1 apple in your stockpile, and 1 apple on the grid.

To add a tent to the grid, click on the empty space of any square (i.e. not on an apple). You'll see a tent pop up, and you'll lose 1 apple from your stockpile.

To collect more apples, click on an apple that is on the same space as one of your tents.

A new apple will appear on the map every second, and disapper after 5 seconds.

Tents disappear 4 seconds after you create them.

Every 10 seconds you'll lose an apple from your stockpile due to apple rot.

When your stockpile is empty, you lose the game. There is no win condition, just play to see how long you can last (it's deceptively hard).
