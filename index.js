const { groupBy } = require("lodash");

let data = require("./data.json");

const xoso = 502;

data = groupBy(data, 'name');

data = Object.values(data).filter(e => e.length === 1).map((e, i) => ({ ...e[0], comment: Number(e[0].comment), order: i }));

data = data.sort((a, b) => {
    const diff = Math.abs(a.comment - xoso) - Math.abs(b.comment - xoso);
    if (diff === 0) return a.order - b.order;
    return diff;
})

console.table(data.slice(0,100));