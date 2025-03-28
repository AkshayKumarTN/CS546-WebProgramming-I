//require express and express router as shown in lecture code
import helpers from '../helpers.js';
import { Router } from 'express';

const router = Router();

router.route('/:movieId')
  .get(async (req, res) => {
    //code here for GET
  })
  .post(async (req, res) => {
    //code here for POST
  });

router.route('/review/:reviewId')
  .get(async (req, res) => {
    //code here for GET
  })
  .delete(async (req, res) => {
    //code here for DELETE
  });

  export default router;