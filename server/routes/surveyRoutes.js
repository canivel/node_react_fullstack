const mongoose = require("mongoose");
const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");
const requireLogin = require("../middlewares/requireLogin");
const requireCredit = require("../middlewares/requireCredit");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.get("/api/surveys/thanks", (req, res) => {
    res.send("Thanks for yout input");
  });

  app.post("/api/surveys/webhook", (req, res) => {
    const p = new Path("/api/surveys/:surveyId/:choice");
    const events = _.chain(req.body)
      .map(({ email, url }) => {
        const pathname = new URL(url).pathname;
        const match = p.test(pathname);
        if (match) {
          return { ...match, email };
        }
      })
      .compact()
      .uniqBy("email", "surveyId")
      .value();

    console.log(events);
    res.send({});
  });

  app.post("/api/surveys", requireLogin, requireCredit, async (req, res) => {
    const { campaign_name, subject, body, recipients } = req.body;

    const survey = new Survey({
      campaign_name: campaign_name,
      subject: subject,
      body: body,
      recipients: recipients.split(",").map(email => {
        return { email: email.trim() };
      }),
      _user: req.user.id,
      dateSent: Date.now()
    });

    const mailer = new Mailer(survey, surveyTemplate(survey));
    try {
      await mailer.send();
      await survey.save();
      req.user.credits -= 1;
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
