const router = require("express").Router();
const {
  RecomItemBalance,
  RecomBinBalance,
  RecomBatchBalance,
} = require("../services/recom");

const initSales = () => {
  router.get("/recom-item", async (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    try {
      const data = JSON.parse(req.query.recomItem);
      await RecomItemBalance(req, res, data);
    } catch (e) {
      console.log("Error encounter: ", e);
    } finally {
      res.end();
    }
  });

  router.get("/recom-bin", async (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    try {
      const data = JSON.parse(req.query.recomBin);
      await RecomBinBalance(req, res, data);
    } catch (e) {
      console.log("Error encounter: ", e);
    } finally {
      res.end();
    }
  });

  router.get("/recom-batch", async (req, res) => {
    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");
    try {
      const data = JSON.parse(req.query.recomBatch);
      await RecomBatchBalance(req, res, data);
    } catch (e) {
      console.log("Error encounter: ", e);
    } finally {
      res.end();
    }
  });

  return router;
};

module.exports = {
  initRoutes: initSales,
};
