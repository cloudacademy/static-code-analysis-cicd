const controller = {};

controller.generateMessage = (req, res, next) => {
    const name = req.body;
    console.log(name);

    if (name == null || name === '') {
        res.status(400).send('The request body must not be empty');
        return;
    }

    res.send(`Hi ${name}`);
}

export default controller;