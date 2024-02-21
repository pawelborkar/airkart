const advancedResults = (model, populate) => async (req, res, next) => {
  let query;

  const requestedQuery = { ...req.query };

  const removeFields = ['limit', 'page', 'select', 'sort', 'search', 'tag'];

  removeFields.forEach((param) => delete requestedQuery[param]);

  let queryString = JSON.stringify(requestedQuery);

  queryString = queryString.replace(/\b(gt|gte|lt|lte|in)\b/g, (match) => `$${match}`);

  queryString = JSON.parse(queryString);

  query = model.find(queryString);

  // Select Fields
  if (req.query.select) {
    const fields = req.query.select.split(',').join(' ');
    query = query.select(fields);
  }

  // Search
  if (req.query.search) {
    const searchValue = new RegExp(req.query.search, 'i');
    query.find({
      $or: [{ name: { $regex: searchValue } }, { description: { $regex: searchValue } }],
    });
  }

  // Search by tag
  if (req.query.tag) {
    const searchTag = new RegExp(req.query.tag, 'i');
    query.find({
      tags: { $regex: searchTag },
    });
  }

  // Sort
  if (req.query.sort) {
    const sortBy = req.query.sort.split(',').join(' ');
    query = query.sort(sortBy);
  } else {
    query = query.sort('-createdAt');
  }

  const page = parseInt(req.query.page, 10) || 1;

  // Limit
  const limit = parseInt(req.query.limit, 10) || 10;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await model.countDocuments();
  query = query.skip(startIndex).limit(limit);

  if (populate) {
    query = query.populate(populate);
  }

  // Executes the query
  const results = await query;

  // Pagination results
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit,
    };
  }

  if (startIndex > 0) {
    pagination.pre = {
      page: page - 1,
      limit,
    };
  }

  res.advancedResults = {
    success: true,
    total,
    count: results.length,
    pagination,
    data: results,
  };

  next();
};

export default advancedResults;
