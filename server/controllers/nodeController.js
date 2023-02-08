const Node = require('./../models/nodeModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllNodes = catchAsync(async (req, res, next) => {
  const node = await Node.find();
  //Send Response
  res.status(200).json({
    status: 'success',
    results: node.length,
    data: {
      node
    }
  });
});

exports.getNode = catchAsync(async (req, res, next) => {
  const node = await Node.findOne({ _id: req.params.id });
  if (!node) {
    return next(new AppError('No node found with Id', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      node
    }
  });
});

exports.createNodeId = catchAsync(async (req, res, next) => {
  try {
    const node = await Node.findOne({ _id: req.params.id });
    node.data.push(req.body);
    node.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error
    });
  }
});

exports.createNode = catchAsync(async (req, res, next) => {
  const newNode = await Node.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      node: newNode
    }
  });
});

exports.updateNode = catchAsync(async (req, res, next) => {
  const node = await Node.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });
  if (!node) {
    return next(new AppError('No node found with that Id', 400));
  }
  res.status(200).json({
    status: 'success',
    data: {
      node
    }
  });
});

exports.deleteNode = catchAsync(async (req, res, next) => {
  const node = await Node.findByIdAndDelete(req.params.id);
  if (!node) {
    return next(new AppError('No node found with ID', 404));
  }
  res.status(204).json({
    status: 'success',
    data: null
  });
});
