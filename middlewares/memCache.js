const cache = require("memory-cache");

let memCache = new cache.Cache();

module.exports = (duration) => {
  return (req, res, next) => {
    let key = "__express__" + req.originalUrl || req.url;
    let cacheContent = memCache.get(key);

    if (cacheContent) {
      res.status(200).json(cacheContent);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        memCache.put(key, body, duration);
        res.sendResponse(body);
      };

      next();
    }
  };
};
