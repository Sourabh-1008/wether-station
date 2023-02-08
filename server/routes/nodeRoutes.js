const express = require('express');
const nodeController = require('./../controllers/nodeController');

const authController = require('./../controllers/authController');

const router = express.Router();
router
  .route('/')
  .get(
    nodeController.getAllNodes,
    authController.protect,
    authController.restrictTo('admin')
  )
  .post(nodeController.createNode);

router
  .route('/:id')
  .post(nodeController.createNodeId)
  .get(nodeController.getNode)
  .patch(nodeController.updateNode)
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    nodeController.deleteNode
  );

module.exports = router;
