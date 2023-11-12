exports.create = async (req, res) => {
    res.status(200).json({status:"success", data:"Create a blog"});
};

exports.read = async (req, res) => {
    res.status(200).json({status:"success", data:"Read all blog posts"});
};

exports.delete = async (req, res) => {
    res.status(200).json({status:"success", data:"Delete a blog post"});
};

exports.update = async (req, res) => {
    res.status(200).json({status:"success", data:"Update a blog post"});
};
