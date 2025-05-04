// Set-Up Routes
import { Router } from 'express';
import path, { dirname } from 'path';
import {fileURLToPath} from 'url'

const _filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(_filename);
const router = Router();

router
  .route('/')
  .get(async (req, res) => {
    //code here for GET to show static HTML flie
    try {
      return res.sendFile(path.join(_dirname,'..','static','webpage.html'));
    } catch (e) {
      return res.status(500).json(e);
    }
  })

  export default router;
