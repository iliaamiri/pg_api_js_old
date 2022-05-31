const {availableLanguages, defaultLanguage} = require("../../config/language.js");

module.exports = () => {
    /*
    * Eventually, every api has to have their own settings including their api language.
    * There should be a collection or space for them in database, and they need to have their own services and modules.
    * For now, I am assuming that we only have one single API and this API is going to change the default language
    * that is hard-coded in the /core/configs.js
    * */

    return (req, res, next) => {
        const config = req.body['config'];
        if (config !== undefined && config['lang'] !== undefined){
            defaultLanguage = (availableLanguages.includes(config['lang'])) ? config['lang'] : defaultLanguage;
        }
        next();
    }
}