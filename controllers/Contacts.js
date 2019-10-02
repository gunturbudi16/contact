const Contact = require("../models/Contact");

class contactController {
  static create(req, res) {
    //res.send("Halo ini dari controller");
    console.log("masuk");

    const newData = {
      name: req.body.name,
      phone: req.body.phone,
      company: req.body.company,
      active: Boolean(req.body.active)
    };

    console.log(newData);

    Contact.create(newData)
      .then(response => {
        console.log(response, "response");

        res.status(200).json({
          message: "New Contact has been Created",
          response
        });
      })
      .catch(err => {
        console.log(error);

        res.sendStatus(500);
      });
  }
  static findAll(req, res) {
    Contact.find()
      .then(response => {
        res.status(200).json({
          message: "Data has been fetched Succesfully",
          data: response
        });
      })
      .catch(err => {
        res.sendStatus(500);
      });
  }
  static findById(req, res) {
    const contactId = req.params.id;
    Contact.findById(contactId)
      .then(response => {
        res.status(200).json({
          message: "Data Has been fetch Succesfully"
        });
      })
      .catch(err => {
        res.sendStatus(500);
      });
  }
  static update(req, res) {
    //res.send("Halo ini dari controller");
    const newData = {
      name: req.body.name,
      phone: req.body.phone,
      company: req.body.company,
      active: Boolean(req.body.active) || true
    };
    const contactid = req.params.id;
    Contact.findByIdAndUpdate(contactid, newData)
      .then(response => {
        res.status(200).send({
          message: `${contactid} succesfully updated`,
          data: response
        });
      })
      .catch(err => {
        res.sendStatus(500);
      });
  }
  static delete(req, res) {
    //res.send("Halo ini dari controller");
    const newData = {
      name: req.body.name,
      phone: req.body.phone,
      company: req.body.company,
      active: Boolean(req.body.active) || true
    };
    const contactid = req.params.id;
    Contact.findByIdAndDelete(contactid, newData)
      .then(response => {
        res.status(200).send({
          message: `${contactid} succesfully updated`,
          data: response
        });
      })
      .catch(err => {
        res.sendStatus(500);
      });
  }
}
module.exports = contactController;
