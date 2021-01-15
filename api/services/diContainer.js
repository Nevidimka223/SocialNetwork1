class DiContainer {
    static services = {};
    static register = function (key, service) {
        DiContainer.services[key] = service;
    };
    static resolve = function (key) {
        return DiContainer.services[key];
    };
};

module.exports = DiContainer;
