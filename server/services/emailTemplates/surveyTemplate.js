const keys = require("../../config/keys");

module.exports = survey => {
  return `
    <html>
        <body>
            <div style="text-align: center;">
                <h3>Give us your input:</h3>
                <p>Please answer the following question: </p>
                <p>${survey.body}</p>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/answered_yes">YES</a>
                </div>
                <div>
                    <a href="${keys.redirectDomain}/api/surveys/${
    survey.id
  }/answered_no">NO</a>
                </div>
            </div>
        </body>
    </html>
    `;
};
