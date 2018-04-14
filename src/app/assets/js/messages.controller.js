const controller = {};

controller.generateMessage = (req, res) => {
    const { name } = req.query;

    if (name == null || name === '') {
        next(new Error('The "name" parameter is required'));
        return;
    }

    res.json({
        message: `Hi ${name}`
    });
}

export default controller;