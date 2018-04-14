const controller = {};

controller.generateMessage = (req, res, next) => {
    const body = req.body;
    console.log(body);

    if (body == null || body === '') {
        res.status(400).send('The request body must not be empty');
        return;
    }
    
    const name = eval(req.body);
    res.send(`Hi ${name}`);
}

export default controller;