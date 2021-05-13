Object.defineProperty(exports, "__esModule", { value: true });
exports.GTMPageView = void 0;
exports.GTMPageView = function (url) {
    var pageEvent = {
        event: 'pageview',
        page: url,
    };
    //@ts-ignore
    window && window.dataLayer && window.dataLayer.push(pageEvent);
    return pageEvent;
};