const animals = require("./data/animal");

async function main(){
    console.log('===============Create new data===============');
    console.log('===============Create Sasha==================');
    const item1 = await animals.create("Sasha","Dog");
    console.log(item1);
    console.log('===============Create Lucy===================');
    const item2 = await animals.create("Lucy","Dog");
    console.log(item2);
    console.log('===============Show All Items================');
    const allItems = await animals.getAll();
    console.log(allItems);
    console.log('===============Create Duke===================');
    const item3 = await animals.create("Duke","Walrus");
    console.log(item3);
    console.log('===============Rename Sasha==================');
    const updateItem = await animals.rename("5e49ca13b911a15d5aa33b08","Sashita");
    console.log(updateItem);
    console.log('===============Remove Lucy===================');
    const removeItem = await animals.remove("5e49ca13b911a15d5aa33b09");
    console.log(removeItem);
    console.log('===============Show All Items================');
    console.log(allItems);
}

main();