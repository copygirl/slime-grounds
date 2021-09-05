// priority: 0

onEvent("recipes", event => {
  event.forEachRecipe({ id: /_stairs/, type: "minecraft:crafting_shaped" }, recipe => {
    let input  = recipe.inputItems[0];
    let output = recipe.outputItems[0].getId();
    recipe.replaceOutput(output, "6x " + output, false, (out, _) => out);
    event.shapeless(input, [ output ]);
  });
  
  event.forEachRecipe({ id: /_slab/, type: "minecraft:crafting_shaped" }, recipe => {
    if (recipe.outputItems[0].getCount() != 6) return;
    let input  = recipe.inputItems[0];
    let output = recipe.outputItems[0].getId();
    event.shapeless(input, [ output, output ]);
  });
  
  event.remove({ id: /_stairs_reverse/ });
});
