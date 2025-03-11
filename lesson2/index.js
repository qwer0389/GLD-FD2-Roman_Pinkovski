const purchases = [
    { date: 'Feb', category: 'Food', amount: 50 },
    { date: 'Feb', category: 'Clothing', amount: 100 },
    { date: 'Feb', category: 'Entertainment', amount: 75 },
    { date: 'Mar', category: 'Food', amount: 25 },
    { date: 'Mar', category: 'Clothing', amount: 200 },
    { date: 'Mar', category: 'Entertainment', amount: 50 },
    { date: 'Mar', category: 'Food', amount: 100 },
    { date: 'Mar', category: 'Clothing', amount: 150 },
    { date: 'Apr', category: 'Entertainment', amount: 100 },
    { date: 'Apr', category: 'Food', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
    { date: 'Jul', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Food', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
];


const makePurchaseStat = (purchases) => {
    return purchases.reduce((acc, item) => {
        acc.total += item.amount;

        if (!acc.categories[item.category]) {
            acc.categories[item.category] = item.amount;
        } else {
            acc.categories[item.category] += item.amount;
        }

        if (!acc.months[item.date]) {
            acc.months[item.date] = item.amount;
        } else {
            acc.months[item.date] += item.amount;
        }
        return acc;
    }, {total: 0, categories: {}, months: {}});
};

const ExampResult = makePurchaseStat(purchases);
console.log(ExampResult);



const purchases = [
    { date: 'Feb', category: 'Food', amount: 50 },
    { date: 'Feb', category: 'Clothing', amount: 100 },
    { date: 'Feb', category: 'Entertainment', amount: 75 },
    { date: 'Mar', category: 'Food', amount: 25 },
    { date: 'Mar', category: 'Clothing', amount: 200 },
    { date: 'Mar', category: 'Entertainment', amount: 50 },
    { date: 'Mar', category: 'Food', amount: 100 },
    { date: 'Mar', category: 'Clothing', amount: 150 },
    { date: 'Apr', category: 'Entertainment', amount: 100 },
    { date: 'Apr', category: 'Food', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Apr', category: 'Clothing', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jun', category: 'Food', amount: 100 },
    { date: 'Jun', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
    { date: 'Jul', category: 'Entertainment', amount: 100 },
    { date: 'Jul', category: 'Food', amount: 100 },
    { date: 'Jul', category: 'Clothing', amount: 100 },
];

const makePurchaseStat = (purchases) => {
    const result = {
        total: 0,
        categories: new Map(),
        months: new Map()
    };

    purchases.forEach(({ date, category, amount }) => {
        result.total += amount;

        result.categories.set(category, (result.categories.get(category) || 0) + amount);
        result.months.set(date, (result.months.get(date) || 0) + amount);
    });

    return {
        total: result.total,
        categories: Object.fromEntries(result.categories),
        months: Object.fromEntries(result.months)
    };
};

const ExampResult = makePurchaseStat(purchases);
console.log(ExampResult);
