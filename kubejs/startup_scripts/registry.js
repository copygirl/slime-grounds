// priority: 0

onEvent("item.registry", event => {
  event.create("raw_zinc").displayName("Raw Zinc");
  event.create("coal_dust").displayName("Coal Dust");
});

onEvent("block.registry", event => {
  event.create("raw_zinc_block").displayName("Block of Raw Zinc")
    .material("stone").hardness(5.0).resistance(6.0)
    .harvestTool("pickaxe", 1).requiresTool(true);
});
