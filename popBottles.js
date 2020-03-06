// Write a program so that you can figure out how many total bottles
// of pop can be redeemed given a customer investment.
const printTotalPop = (dollars) => {
  let earnedByEmptiesTotal = 0;
  let earnedByCapsTotal = 0;
  let remainingEmpties;
  let remainingCaps;
  const totalPop = (dollars, emptyBottles = 0, caps = 0) => {

    // Not enough dollars or trades to get another bottle, log the current
    // supply to remind customer
    if (dollars < 2 && (emptyBottles < 2 || !emptyBottles) && (caps < 4 || !caps)) {
      remainingEmpties = emptyBottles;
      remainingCaps = caps;
      return 0;
    }

    // Buy new bottles with dollars
    let newBottles = parseInt(dollars / 2);

    // Trade empties for new bottles and reduce empties supply
    if (emptyBottles >= 2) {
      const earnedByEmpties = parseInt(emptyBottles / 2);
      earnedByEmptiesTotal += earnedByEmpties;
      newBottles += earnedByEmpties;
      emptyBottles -= earnedByEmpties * 2;
    }

    // Trade bottle caps for new bottles and reduce caps supply
    if (caps >= 4) {
      const earnedByCaps = parseInt(caps / 4);
      earnedByCapsTotal += earnedByCaps;
      newBottles += earnedByCaps;
      caps -= earnedByCaps * 4;
    }

    // Convert new bottles into emptys and caps
    emptyBottles += newBottles;
    caps += newBottles;

    // Return how many new bottles obtained, and call function recursively
    // to trade empties and caps
    return newBottles + totalPop(0, emptyBottles, caps);
  }
  console.log(`
  TOTAL BOTTLES: ${totalPop(dollars)}
  REMAINING BOTTLES: ${remainingEmpties}
  REMAINING CAPS: ${remainingCaps}
  TOTAL EARNED:
    BOTTLES: ${earnedByEmptiesTotal}
    CAPS: ${earnedByCapsTotal}
  `);
}

printTotalPop(10);
printTotalPop(20);
printTotalPop(40);