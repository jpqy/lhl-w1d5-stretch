// Write a program so that you can figure out how many total bottles
// of pop can be redeemed given a customer investment.
const totalPop = (dollars, emptyBottles, caps) => {

  // Not enough dollars or trades to get another bottle
  if (dollars < 2 && emptyBottles < 2 && caps < 4) {
    return 0;
  }

  // Buy new bottles with dollars
  let newBottles = parseInt(dollars / 2);

  // Trade empties for new bottles and reduce empties supply
  if (emptyBottles >= 2) {
    newBottles += parseInt(emptyBottles / 2);
    emptyBottles -= parseInt(emptyBottles / 2) * 2;
  }

  // Trade bottle caps for new bottles and reduce caps supply
  if (caps >= 4) {
    newBottles += parseInt(caps / 4);
    caps -= parseInt(caps / 4) * 4;
  }

  // Convert new bottles into emptys and caps
  emptyBottles += newBottles;
  caps += newBottles;

  // Return how many new bottles obtained, and call function recursively
  // to trade empties and caps
  return newBottles + totalPop(0, emptyBottles, caps);
}

console.log(totalPop(20, 0, 0));
console.log(totalPop(10, 0, 0));