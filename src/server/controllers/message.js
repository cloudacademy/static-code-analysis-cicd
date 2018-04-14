const controller = {};

controller.generateMessage = (req, res, next) => {
    const name = req.body;
    console.log(name);

    if (name == null || name === '') {
        next(new Error('The "name" parameter is required'));
        return;
    }

    res.send(`Hi ${name}`);
}

export default controller;