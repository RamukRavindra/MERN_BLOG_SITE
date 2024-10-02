// Retrieve All Categories
const categories = db.categories.find({}).toArray();

// Create map of category names to their IDs
const categoryMap = [];
categories.forEach(catItem => {
    categoryMap[catItem.name] = catItem._id;
})

// Update Posts with CategoryId
db.posts.find({}).forEach(postItem => {
    const categoryId = categoryMap[postItem.category];
    if (categoryId) {
        db.posts.updateOne({ _id: postItem._id }, { $set: { category: categoryId } })
    }
});