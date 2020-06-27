// const rand = (max, min) => Math.floor(Math.random() * (max - min)) + min;
const choice = (items) => Math.floor(Math.random() * items.length);
function remove(items, item){
    const idx = items.indexOf(item);
    // return items;
    if(idx){
        // return items[idx]
        return items.splice(idx, 1);
    }
} 
export { choice, remove }