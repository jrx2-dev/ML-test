import express from 'express';

import * as itemCtrl from '../controllers/items.controller.js';

const router = express.Router();

router.get("/items", itemCtrl.getItemsByQuery);

router.get("/items/:id", itemCtrl.getItemsById);

export default router;
